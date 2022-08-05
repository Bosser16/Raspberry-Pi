import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';


function Roshambo() {

class Finish extends React.Component{
  constructor(props){
    super(props);
  }

  compMove(){
    const moves = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random()* 3);
    return(moves[ran]);
  }

  startOver(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Start />);
  }

  win(comp){
    if ((this.props.moves === "rock" && comp === "scissors")
      ||(this.props.moves === "scissors" && comp === "paper")
      ||(this.props.moves === "paper" && comp === "rock")){
        return ('You Won!!!');
    }
    else if(comp === this.props.moves){
      return ("You Tied");
    }
    else{
      return ("You Lost :(")
    }
  }

  render(){
    let computerMove = this.compMove();
    let winner = this.win(computerMove);
    return(
      <div className="centerText">
        <div className = "screen">
          <h1 className="whiteText"> Rock Paper Scissors</h1>
          <h1 className="whiteText" >{winner}</h1> 
            <div className="move">
              <div className="move">
                <h3>You chose: </h3>
                <h3>{this.props.moves}</h3>
              </div>
              <div className="move">
                <h3>Computer chose: </h3>
                <h3>{computerMove}</h3>
              </div>
              <div>
                <h1> </h1>
                <button onClick ={() => this.startOver()} className = "buttons" >restart</button>
              </div>
            </div>  
        </div>
      </div>
      );
  }
}    

class Start extends React.Component{
  constructor(props){
    super(props);
    let move;
  }


  setMove(move){
    this.move = move;
    this.callFinish()
  }

  callFinish(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Finish moves = {this.move} />);
  }
  
  render(){
    return(
      <div className="centerText">
        <div className="screen">
          <h1 className="whiteText"> Rock Paper Scissors</h1>
          <h2 className="whiteText">Choose your move: </h2>
          <div>
            <button onClick ={() => this.setMove("rock")} className = "buttons">Rock</button> 
            <button onClick ={() => this.setMove("paper")} className = "buttons">Paper</button> 
            <button onClick ={() => this.setMove("scissors")} className = "buttons">Scissors</button> 
          </div>
        </div>
      </div>
      );
  }
}
  

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Start />);

}

export default App;
