import React from "react";
import dessert_list from "./DessertsData";
import "../App.css";

function Desserts() {
  return (
    <div className="cards-container">
      {dessert_list.map((ds, index) => (
        <article className="card" key={index}>
          <img src={ds.url} alt={ds.name} />
          <h3>{ds.name}</h3>
          <p>{ds.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Desserts;
