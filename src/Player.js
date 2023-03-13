//import React from "react";
import "./Player.css";

//export default function Player(props) {
export default function Player({ title, score, current, active }) {
  // desestructuring props en los argumentos de la función
  // console.log(props)

  const clasesCSS = ["player"];
  if (active) clasesCSS.push("player--active");
  if (score >= 100) clasesCSS.push("player--winner");

  return (
    //<section className={active ? "player player--active" : "player"}>
    <section className={clasesCSS.join(" ")}>
      <h2 className="name">{title}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{current}</p>
      </div>
    </section>
  );
}
