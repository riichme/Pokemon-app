import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputId, setInputId] = useState("");

  function getData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputId}&appid=1fe5f03e8b679377cbc41601289edfdd&units=metc`
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }

  function resetData() {
    setItems([]);
    setInputId("");
  }

  return (
    <div className="App">
      <input value={inputId} onChange={(e) => setInputId(e.target.value)} />
      <button onClick={() => getData()}>cari</button>
      <button onClick={() => resetData()}>reset</button>

      <div>
        {items.map((item) => (
          <div>
            <h2>
              {item.name}, {item.sys.country}
            </h2>
            <h5>
              <span class="temp">{item.main.temp}°С</span>{" "}
              <span class="temp">{item.weather[0].description}</span>
            </h5>
            <p>
              Temperature from {item.main.temp_min}°С to {item.main.temp_max}°С
            </p>
            <h5>Wind Speed : {item.wind.speed} m/s</h5>
            <h5>Clouds : {item.clouds.all}%</h5>
            <h4>
              Geo Coordinates : [{item.coord.lat}, {item.coord.lon}]
            </h4>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
