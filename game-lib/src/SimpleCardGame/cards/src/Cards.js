import React from 'react';
import ReactDOM from 'react-dom/client';
import './Cards.css';


export default function CardGame () {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function RandomNumber () {
  let min = 1;
  let max = 13;
  return Math.round(Math.random() * (max - min) + min);
}

function App () {
  return (
  <div>  
    <h1>Welcome to a simple card game</h1>
    <button className = "btn" onClick={CallGame}>Click To Start</button>  
  </div>
  );
}

function Game (props) {
  return (
  <div>
      <h3>Draw from the deck</h3>
      <button id="deck" onClick={DrawCard}></button>
      <button id="hand">{props.shape} {props.number}</button>
  </div>    
  );
}

function CallGame () {
  root.render(<Game />);
}

function DrawCard () {
let num = RandomNumber();
let suit = RandomNumber() % 4;  
root.render(<Game 
              number={num === 1 ? "A" : num === 11 ? "J" : num === 12 ? "Q" : num === 13 ? "K" : num}
              shape={suit === 0 ? "♥" : suit === 1 ? "♦" : suit === 2 ? "♣" : "♠"}
              />);
}
}