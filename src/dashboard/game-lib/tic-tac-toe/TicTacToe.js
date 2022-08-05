import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './components/Game'
// PropTypes is disabled

export default function App() {
  return (
    <Game />
  )
}

function GameCall() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Game />);
}