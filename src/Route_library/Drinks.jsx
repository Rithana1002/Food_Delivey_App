import React from "react";
import drinks_list from "./DrinksData";
import "../App.css";

function Drinks() {
  return (
    <div className="cards-container">
      {drinks_list.map((d, index) => (
        <article className="card" key={index}>
          <img src={d.url} alt={d.name} />
          <h3>{d.name}</h3>
          <p>{d.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Drinks;
