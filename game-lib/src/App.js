import TicTacToe from './tic-tac-toe/src/TicTacToe';
import CardGame from './SimpleCardGame/cards/src/Cards';
import DrNim from './dr-nim-game/src/DrNim'
import './tic-tac-toe/src/index.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Library</h1>
      <button onClick={TicTacToe}>Tic-Tac-Toe</button>
      <button onClick={CardGame}>Card Dealer</button>
      <button onClick={DrNim}>Dr. Nim</button>
    </div>
  );
}

export default App;
