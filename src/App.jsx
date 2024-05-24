<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> afd39df188a72d755654ec3c725ea6400ccf78e7
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";

function App() {
  const [tab, setTab] = useState("list");
<<<<<<< HEAD
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log("App.js:useEffect");
    fetchLanguages();
  }, []);

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  };
=======
  const [langs, setLangs] = useState(LANGUAGES);
>>>>>>> afd39df188a72d755654ec3c725ea6400ccf78e7

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <>
      <div>
        <header>
          <ul>
            <li onClick={() => setTab("list")}>リスト</li>
            <li onClick={() => setTab("form")}>フォーム</li>
          </ul>
        </header>
        <hr />
        {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
      </div>
    </>
  );
}

export default App;
