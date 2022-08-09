import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './components/Game'
// PropTypes is disabled

const root = ReactDOM.createRoot(
  document.getElementById('content')
);

const element = <Game />;

export default function TicTacToe() {
  return (
    root.render(element)
  )
}