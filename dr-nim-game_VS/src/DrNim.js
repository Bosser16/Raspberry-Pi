import React from 'react';
import ReactDOM from 'react-dom/client';
import './DrNim.css';

export default function Application() {
  
  const root = ReactDOM.createRoot(document.getElementById('game'));
root.render( /*#__PURE__*/React.createElement(Start, null));

var marblesRemaining = document.getElementById('marbles');
var inTurnTaken = 0;
var current = 0;
var computer = 0;

function RandomNumber() {
  let min = 5;
  let max = 20;
  return Math.round(Math.random() * (max - min) + min);
}

function Start() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { className: "btn", onClick: AppCall }, "Start")));


}

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", { id: "whoturn" }, "Your Turn"), /*#__PURE__*/
    React.createElement("button", { className: "btn", id: "take", onClick: TakeMarble }, "Take Marble"), /*#__PURE__*/
    React.createElement("button", { className: "btn", id: "turn", onClick: Delay }, "End Turn"), /*#__PURE__*/
    React.createElement("button", { className: "btn", onClick: Reset }, " Restart"))));



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
    marblesRemaining.textContent = current;
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
  const root = ReactDOM.createRoot(document.getElementById('whoturn'));
  root.render( /*#__PURE__*/React.createElement("h1", { className: "whosturn" }, "Dr. Nim's Turn"));
}

function SwitchTurn() {
  document.getElementById("take").disabled = false;
  const root = ReactDOM.createRoot(document.getElementById('whoturn'));
  root.render( /*#__PURE__*/React.createElement("h1", { className: "humturn" }, "Your Turn"));
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
  marblesRemaining.textContent = current;
  if (current === 0)
  {
    NimWinnerCall();
  }
}

function Restart() {
  current = RandomNumber();
  inTurnTaken = 0;
  marblesRemaining.textContent = current;
}

function Reset() {
  current = RandomNumber();
  inTurnTaken = 0;
  marblesRemaining.textContent = current;
  document.getElementById("take").disabled = false;
  document.getElementById("turn").disabled = false;
}

function Winner(props) {
  current = 0;
  inTurnTaken = 0;
  marblesRemaining.textContent = current;
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
  const root = ReactDOM.createRoot(document.getElementById('game'));
  root.render( /*#__PURE__*/React.createElement(App, null));
}

function NimWinnerCall() {
  const root = ReactDOM.createRoot(document.getElementById('game'));
  root.render( /*#__PURE__*/React.createElement(Winner, {
    title: "DR. NIM WINS",
    img: true,
    smallTitle: "YOU LOSE" }));

}

function HumWinnerCall() {
  const root = ReactDOM.createRoot(document.getElementById('game'));
  root.render( /*#__PURE__*/React.createElement(Winner, {
    title: "CONGRATULATIONS",
    img: false,
    smallTitle: "YOU WIN" }));

}
}

