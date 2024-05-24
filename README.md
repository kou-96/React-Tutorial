### Lesson1 2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #1- React の新規プロジェクト立ち上げ

https://www.youtube.com/watch?v=lEEC_NuIGQc&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13

プロジェクトを立ち上げる時に
node yarn などを使用していて
npx create-react-app (プロジェクト名)
yarn start
で立ち上げれる。
(個人的に従来通りの立ち上げ方でも問題ないと感じたので
今回のプロジェクトの立ち上げは vite で行っている)

import React from 'react'
import ReactDOM from 'react-dom'
ライブラリをインポートしているという認識で OK
getElementById とは
エレメントを指定している。
JavaScript に HTML みたいなのを入れ込んで書く記法を『JSX』と言う。

React を開発する上では、React のコンポーネントが React のコンポーネントを呼ぶのが基本。

通常の HTML では文字列(String)しか入れれないが
JSX 記法では{}これを利用することで JavaScript の要素を入れることが可能。

class => className
class に関してだけは className に変わる。

複数 word は camelCase(キャメルケース)で表される。
onclick => onClick
onclick のような二つの言葉の属性は onClick のように camelCase になる。

export default App;
これで App を default で export しているから
この場合だと App が使える。

### Lesson2 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #2- コンポーネントのプロパティ(props)とステート(state)

https://www.youtube.com/watch?v=8KV1CBcB2Yg&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=2

プロパティとステート(props と state)
props は親のコンポーネントから子供のコンポーネントを呼び出す時に使うもの。
親から渡されるもので、読み込み専用。
props とは別に、React には state という概念がある。
これはコンポーネントの状態を表す。
例えばコンポーネントは、状態によって表示を変更したいということがある。
そのような場合に state を利用する。

コンポーネントの作り方
export const ComponentFunc = () => {
return <div></div>
}
関数を返せばいい

親コンポーネントから子コンポーネントへのプロパティの渡し方
<List title='値'>
この場合だと
List に title というプロパティを渡している。

子コンポーネントからプロパティの参照方法
const ComponentFunc = (props) => {}

### Lesson3 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #3- Class Components と Function Components の書き方の違い

https://www.youtube.com/watch?v=ve85ejcYiZ0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=3

Class Components Function Components
Class Components でのコンポーネント

Class Components では
プロパティは
this.props
ステートは
this.state
this.setState({ key: value })

### Lesson4 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #4- 条件分岐 (if) と繰り返し (loop)

https://www.youtube.com/watch?v=ZLEMN2pCE8E&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=4

条件分岐による表示切替

例
function Test() {

return (
<>

<div>
{tab === "list" ? <List /> : <Form />}
</div>
</>
);
}

or

function Test() {

const body = tab === "list" ? <List /> : <Form />

return (
<>

<div>
{ body }
</div>
</>
);
}

このように
三項演算子を使うと
条件分岐を簡単にできる。

繰り返しによるリスト表示
function Test() {

return (
<>

<div>
{
    list.map((value, index) => {
        return <div key={index}>{ value }</div>
    })
}
</div>
</>
);
}

JSX 内で繰り返しをする場合は
プロパティを key に設定する必要がある。

### 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #5- フォームと親子間のデータのやり取り

https://www.youtube.com/watch?v=kEBP9WhifX0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=5

フォームの中では
onClick ではなく
onSubmit を使うことで
text に入力した文字を
Enter を押した時に反応させたり出来る。

親子間でのデータのやり取り
子コンポーネント=>親コンポーネント

function Parent() {
const testFunc = () => {}
return <Child parentFunc={testFunc} />
}

function Child({ parentFunc }) {
return <div onClick={() => parentFunc(text)}>テスト</div>
}

親コンポーネントで定義した関数を
親コンポーネントから子コンポーネントに
プロパティとして渡して
子コンポーネントからそれを呼び出すという風にして
データを渡す。

親コンポーネント=>子コンポーネント

function Parent() {
const test = "テストデータ"
return <Child parentData={test} />
}

function Child({ parentData }) {
return <div>{parentData}</div>
}

親コンポーネントから子コンポーネントに
データを渡す時は
親コンポーネントから子コンポーネントに
プロパティとしてデータを渡すとして
子コンポーネントはプロパティから
データを取得する。
