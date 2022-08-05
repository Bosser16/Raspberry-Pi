import React from 'react';
import ReactDOM from 'react-dom/client';
import './DrNim.css';

export default function DrNim() {

var marblesRemaining = 0;
var inTurnTaken = 0;
var current = 0;
var computer = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(Start, null));

function Rules () {
  return (
    <div>
  <div id = "desc">
  <h1 id = "title">Dr. Nim game</h1>
  <h2 id = "rules">Here's how you play: </h2>
  <ol id = "list">
    <li>The Game starts with a random amount of marbles</li>
    <li>Each turn you must take 1, 2, or 3 marbles</li>
    <li>Dr. Nim will then take 1, 2, or 3 marbles</li>
    <li>The Person who takes the last marble wins</li>
  </ol>
  <h1 id = "marbles">{marblesRemaining}</h1>
  <h3 id = "remaining"> Marbles Remaining </h3>
</div>
<div id = "game">
<button className= "btn" onClick= {AppCall}>Start</button>
</div>
</div>
);
}

function RandomNumber() {
  let min = 5;
  let max = 20;
  return Math.round(Math.random() * (max - min) + min);
}

function Start() {
  root.render( /*#__PURE__*/React.createElement(Rules, null));
}

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("h3", { id: "whoturn" }, "Your Turn"), /*#__PURE__*/
    React.createElement("button", { className: "btn", id: "take", onClick: TakeMarble }, "Take Marble"), /*#__PURE__*/
    React.createElement("button", { className: "btn", id: "turn", onClick: Delay }, "End Turn"), /*#__PURE__*/
    React.createElement("button", { className: "btn", onClick: Reset }, " Restart")));
}

function TakeMarble() {
  inTurnTaken += 1;
  document.getElementById("turn").disabled = false;
  if (inTurnTaken >= 4)
  {
    document.getElementById("take").disabled = true;
    inTurnTaken = 3;
    return;
  } else

  {
    current -= 1;
    marblesRemaining = current;
    document.getElementById('marbles').innerText = marblesRemaining;
  }
  if (current === 0)
  {
    HumWinnerCall();
  }
}

function Delay() {
  document.getElementById("take").disabled = true;
  document.getElementById("turn").disabled = true;
  setTimeout(SwitchTurn, 2000);
  const turn = ReactDOM.createRoot(document.getElementById('whoturn'));
  turn.render( "Dr. Nim's Turn");
}

function SwitchTurn() {
  document.getElementById("take").disabled = false;
  const turn = ReactDOM.createRoot(document.getElementById('whoturn'));
  turn.render("Your Turn");
  computer = current % 4;
  inTurnTaken = 0;
  for (var i = 0; i < computer; i++)
  {
    current -= 1;
  }
  if (computer === 0)
  {
    current -= RandomNumber() % 3 + 1;
  }
  marblesRemaining = current;
  document.getElementById('marbles').innerText = marblesRemaining;
  if (current === 0)
  {
    NimWinnerCall();
  }
}

function Restart() {
  current = RandomNumber();
  inTurnTaken = 0;
  marblesRemaining = current;
  document.getElementById('marbles').innerText = marblesRemaining;
}

function Reset() {
  current = RandomNumber();
  inTurnTaken = 0;
  marblesRemaining = current;
  document.getElementById('marbles').innerText = marblesRemaining;
  document.getElementById("take").disabled = false;
  document.getElementById("turn").disabled = false;
}

function Winner(props) {
  current = 0;
  inTurnTaken = 0;
  marblesRemaining = current;
  document.getElementById('marbles').innerText = marblesRemaining;
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("h1", null, props.title),

    props.img ? /*#__PURE__*/
    React.createElement("img", { className: "drnim", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5r_o7rgpKfnKcHSnUPygFTahMMpydaG0MQ&usqp=CAU" }) : /*#__PURE__*/
    React.createElement("img", { className: "redthumb", src: "https://th.bing.com/th/id/OIP.QRdtZdcfb3vLSyJ8GgXxqAHaHY?pid=ImgDet&w=859&h=856&rs=1" }), /*#__PURE__*/

    React.createElement("h2", null, props.smallTitle), /*#__PURE__*/
    React.createElement("button", { className: "btn", onClick: AppCall }, "Play Again")));


}

function AppCall() {
  Restart();
  document.getElementById('marbles').innerText = marblesRemaining;
  const game = ReactDOM.createRoot(document.getElementById('game'));
  game.render( /*#__PURE__*/React.createElement(App, null));
}

function NimWinnerCall() {
  const game = ReactDOM.createRoot(document.getElementById('game'));
  game.render( /*#__PURE__*/React.createElement(Winner, {
    title: "DR. NIM WINS",
    img: true,
    smallTitle: "YOU LOSE" }));

}

function HumWinnerCall() {
  const game = ReactDOM.createRoot(document.getElementById('game'));
  game.render( /*#__PURE__*/React.createElement(Winner, {
    title: "CONGRATULATIONS",
    img: false,
    smallTitle: "YOU WIN" }));

}
}

