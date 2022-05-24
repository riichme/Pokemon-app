import "./App.css";

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputId, setInputId] = useState("");

  function getData() {
    fetch(`https://api.pokemontcg.io/v1/cards?q=name:${inputId}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }

  function resetData() {
    setItems([]);
    setInputId("");
  }

  // useEffect(() => {
  //   fetch(`https://api.pokemontcg.io/v1/cards`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [])
  let arr = []
  arr.push(items)
  console.log(items.cards, "<<< ARR")
  return (
    <div className="App">      
      <input value={inputId} onChange={(e) => setInputId(e.target.value)} />
      <button onClick={() => getData()}>cari</button>
      <button onClick={() => resetData()}>reset</button>

      <div>
        { items.cards ? items.cards.map(itm => (
          <div>
           <img style={{width: '20%', height: '20%', marginLeft: '50px', marginBottom: '20px', marginTop: '20px', position: 'center'}} key={itm.id} src={itm.imageUrl} alt={itm.name}></img>
            
            <br />
          </div>
        )): ''}
      </div>
    </div>
  );
}