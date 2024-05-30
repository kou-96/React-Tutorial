### Lesson1【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #1- React の新規プロジェクト立ち上げ

https://www.youtube.com/watch?v=lEEC_NuIGQc&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13

プロジェクトを立ち上げる時に
node yarn などを使用していて
npx create-react-app (プロジェクト名)
yarn start
で立ち上げれる。
(個人的に従来通りの立ち上げ方でも問題ないと感じたので
今回のプロジェクトの立ち上げは vite で行っている)

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

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

### Lesson2【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #2- コンポーネントのプロパティ(props)とステート(state)

https://www.youtube.com/watch?v=8KV1CBcB2Yg&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=2

プロパティとステート(props と state)
props は親のコンポーネントから子供のコンポーネントを呼び出す時に使うもの。
親から渡されるもので、読み込み専用。
props とは別に、React には state という概念がある。
これはコンポーネントの状態を表す。
例えばコンポーネントは、状態によって表示を変更したいということがある。
そのような場合に state を利用する。

コンポーネントの作り方

```javascript
export const ComponentFunc = () => {
  return <div></div>;
};
```

関数を返せばいい

親コンポーネントから子コンポーネントへのプロパティの渡し方
<List title='値'>
この場合だと
List に title というプロパティを渡している。

子コンポーネントからプロパティの参照方法

```javascript
const ComponentFunc = (props) => {};
```

### Lesson3【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #3- Class Components と Function Components の書き方の違い

https://www.youtube.com/watch?v=ve85ejcYiZ0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=3

Class Components Function Components
Class Components でのコンポーネント

Class Components では
プロパティは
this.props
ステートは
this.state
this.setState({ key: value })

### Lesson4【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #4- 条件分岐 (if) と繰り返し (loop)

https://www.youtube.com/watch?v=ZLEMN2pCE8E&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=4

条件分岐による表示切替

例

```javascript
function Test() {
  return (
    <>
      <div>{tab === "list" ? <List /> : <Form />}</div>
    </>
  );
}

or;

function Test() {
  const body = tab === "list" ? <List /> : <Form />;

  return (
    <>
      <div>{body}</div>
    </>
  );
}
```

このように
三項演算子を使うと
条件分岐を簡単にできる。

繰り返しによるリスト表示

```javascript
function Test() {
  return (
    <>
      <div>
        {list.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    </>
  );
}
```

JSX 内で繰り返しをする場合は
プロパティを key に設定する必要がある。

### Lesson5【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #5- フォームと親子間のデータのやり取り

https://www.youtube.com/watch?v=kEBP9WhifX0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=5

フォームの中では
onClick ではなく
onSubmit を使うことで
text に入力した文字を
Enter を押した時に反応させたり出来る。

親子間でのデータのやり取り
子コンポーネント=>親コンポーネント

```javascript
function Parent() {
  const testFunc = () => {};
  return <Child parentFunc={testFunc} />;
}

function Child({ parentFunc }) {
  return <div onClick={() => parentFunc(text)}>テスト</div>;
}
```

親コンポーネントで定義した関数を
親コンポーネントから子コンポーネントに
プロパティとして渡して
子コンポーネントからそれを呼び出すという風にして
データを渡す。

親コンポーネント=>子コンポーネント

```javascript
function Parent() {
  const test = "テストデータ";
  return <Child parentData={test} />;
}

function Child({ parentData }) {
  return <div>{parentData}</div>;
}
```

親コンポーネントから子コンポーネントに
データを渡す時は
親コンポーネントから子コンポーネントに
プロパティとしてデータを渡すとして
子コンポーネントはプロパティから
データを取得する。

### Lesson6 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #6- コンポーネントのライフサイクル

https://www.youtube.com/watch?v=SKrnW7PRBdk&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=6

コンポーネントのライフサイクル

react のコンポーネントのライフサイクル
1 生まれる = Mounting された時
2 Mounting された時 = Updating が発生する
3 Unmounting が亡くなるみたいな意味

react は Mounting 状態になったら
呼ばれる関数がある。
それを利用することで
コンポーネントがレンダリングされる前に
API などを叩きたいとか
コンポーネントで色んな内容を
表示する前に API 叩きたいとか
そういう時に Mounting を使うと
コンポーネントが表示されたときという
イベントが取れるようになる。

Updating はアップデート毎に
色々したいことがあったら書く
コンポーネントが居なくなったら
メモリを綺麗にしたりなど

class コンポーネントは
componentDidMount
componentDidUpdate
componentDidUnmount
これらを使う

function コンポーネントは
useEffect

Unmount は useEffect の
第一引数の関数の返り値になる。

### Lesson7 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #7 React のスタイル

https://www.youtube.com/watch?v=VxwI2tavv_M&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=7

Inline CSS では
style を Object で表し
それを要素に当てるという方法を使う。

```javascript
const divStyle = {
  color: "blue",
  backgroundColor: "black",
};
function TestComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

CSS Modules では
別ファイルで css を定義しておいて
その css を import し
それを className で当てる。
css のスコープがコンポーネント単位になって
名前で当てるよりも良い感じになる。

```javascript
import styles from "./style.css";
function TestComponent() {
  return <div className={styles.test}>Hello World!</div>;
}
```

CSS Modules は
style を import したものが
Js のオブジェクトみたいになっていて
.test などで
クラスを取り出して使える。

何故 css を import して
そのまま文字列で書かないのか
css は名前が競合してしまうのを防ぐ為。
例えば
test と test みたいな
この場合後に書いた方が
適応されてしまう場合がある。

このモジュールを使うことで
その場のスコープで収まってくれる所が良いところ。

styled components では
styled-components というのを
import して使う。
CSS を加えたタグ要素を定義し
それを利用する。
css を入力する際は必ず
バッククォート[``]を使うように忘れずに。

```javascript
import styles from "styled-components";

const TestDiv = styled.div`
  color: "blue";
`;

function TestComponent() {
  return <TestDiv>Hello World!</TestDiv>;
}
```

style をつけたコンポーネントを作成することができる。
1 ファイルで css も JS どちらも書きたい場合に使う場合に使いやすい。

styled components でコンポーネントで動的にスタイルを当てる

```javascript
const NewTest = styled.div`
  padding: 8px;
  color: ${(props) => (props.warn ? "red" : "black")};
`;
```

css の中に JS を書くというやり方
プロパティの値を利用して
三項演算子で割り当てる事が可能。

styled components で別で定義したコンポーネントの継承

```javascript
const TestDiv = styled(Test)`
  color: "blue";
`;
```

スタイルをコンポーネントで作った
別のコンポーネントを()の中に入れて継承する。

### 【2020 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #8 Higher-Order Component

https://www.youtube.com/watch?v=9iulWDK95TY&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=8

子供を受け取るコンポーネント
なにかを囲むコンポーネントを作りたい

```javascript
const Test = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div>テストです</div>
    </div>
  );
};

const Sample = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div>サンプルです</div>
    </div>
  );
};
```

この 2 つは padding: "20px" のスタイルを持つ <div> に囲まれています。
何かしら周りの要素は一緒で
中身は動的に変えたいみたいな時がある。
そういう時は
padding: "20px"　の div を別コンポーネントで定義出来る。
padding: "20px"　を持つ div のコンポーネントを定義して下記のように
書くことができる。

```javascript
const Container = ({ children }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div>{children}</div>
    </div>
  );
};

const Test = () => {
  return <Container>テストです</Container>;
};

const Sample = () => {
  return <Container>サンプルです</Container>;
};
```

children という props が react では
子供のコンポーネントを表す
上記のように
コンポーネントの中で使いそうだなと思う部分を
別のコンポーネントとして定義出来る。
複雑なパターンでよく用いたりする。
例えば
ヘッダー部分とサイドバー部分のコンポーネントは共通で
中身のボディの部分だけ違うみたいなことがよくあるパターン
そういう時によく使うことがある。

Higher-Order Component は
コンポーネントを受け取って
新しくコンポーネントを作成する
コンポーネントです。

```javascript
const Test = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div>テストです</div>
    </div>
  );
};

const Sample = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div>サンプルです</div>
    </div>
  );
};
```

上記を Higher-Order Component で書き直すと

```javascript
const withPadding = (Component) => {
  return (props) => {
    return (
      <div style={{ padding: "20px" }}>
        <Component {...props} />
      </div>
    );
  };
};

const Test = withPadding(() => <div>テストです</div>);
const Sample = withPadding(() => <div>サンプルです</div>);
```

上記の例で説明すると
withPadding という関数はコンポーネントを引数に取っている
返すのはまたコンポーネントになっていて
このコンポーネント内で <div> などを定理した後に
一番最初の引数を使って
html を構成して関数を定義している。

### 【2021 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #9 Portal を利用したモーダル

https://www.youtube.com/watch?v=Kx3cOJWXS8c&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=9

React の Portal
通常、コンポーネントが表示されるときには、JSX の HTML の構造にそった位置で表示させる。
これが、Portal を使うと、任意の場所にコンポーネントを表示させることができるようになる。

```javascript
<ParentComponent>
  <ChildlComponent> // Portalを利用している場合</ChildlComponent>
</ParentComponent>
```

```javascript
<div id="root">
  <div class="parent"> <!-- ParentComponent -->
  </div>
</div>
<div id="portal">
  <div class="child"></div> <!-- ChildComponent -->
</div>
```

上記のように
表示させることができる。
JSX 上の関係とは関係ない位置に ChildComponent を表示することが出来る。
HTML の要素的に親のコンポーネントとの関係と独立させたいとかの場合に利用する。
HTML の height を%で表示させたい時は
親要素から引き継ぐが
特定の親で固定して height を決めたいとか
どこに置いても同じ位置に表示させたいとか
そういう時に利用する。

Portal を使ったコンポーネントと普通のコンポーネントの違いは
return で返す値の違いになる。

```javascript
import ReactDOM from "react-dom";
const elem = document.getElementById("portal-root");

const Test = () => {
  return ReactDOM.createPortal(<div>テスト</div>, elem);
};
```

return で、ReactDOM.createPortal の返り値を返すだけ。
ReactDOM.createPortal は、第 1 引数に JSX の HTML、第 2 引数に表示させたいエレメント
こうすることで、第 2 引数のエレメントに第 1 引数の JSX の HTML が append されるようになる。

### 【2021 年最新 React 入門】未経験から 1 週間でマスターする React 入門 #10. ref によるエレメントの取得

https://www.youtube.com/watch?v=j-c7qQNNRa8&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=10

Function Components での ref の利用

Function Components では、useRef という関数が用意されていて、これを利用する。

```javascript
import { useRef } from "react";
const Test = () => {
  const ref = useRef(null);

  return (
    <div>
      <div ref={ref}>フォーカスさせたい</div>
    </div>
  );
};
```

useRef で帰ってきた参照を div の ref プロパティに入れている。
これにより、ref.current にこの div への参照が入る。
