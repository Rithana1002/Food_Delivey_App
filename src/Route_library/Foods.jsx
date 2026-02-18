import React from "react";
import food_list from "./FoodData";
import "../App.css";

function Foods() {
  return (
    <div className="cards-container">
      {food_list.map((f, index) => (
        <article className="card" key={index}>
          <img src={f.url} alt={f.name} />
          <h3>{f.name}</h3>
          <p>{f.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Foods;
