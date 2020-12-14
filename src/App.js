//import logo from "./logo.svg";
import "./reset.css";
import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await getData.json();

    //console.log(json);

    const url = json.map((element, key) => {
      const catImg = element.url;
      console.log(catImg);
      return catImg;
    });

    //setData(json[0].url);
    setData(url);
    setLoading(false);
  }

  return (
    <div className="App">
      {loading === true ? (
        <p>Cargando Gatito...</p>
      ) : (
        <>
          <div className="imgWrapper">
            <img className="catImg" src={data} alt="Cat Images" />
          </div>
          <button onClick={fetchData} className="button">
            Otro Gatito
          </button>
        </>
      )}
    </div>
  );
}

export default App;
