import React, { useReducer } from 'react';
import Board from './Board';
import { Box, Button, Grid, List, ListItem, styled, Typography } from '@mui/material';

const reducer = (state, action) => {
  switch (action.type) {
    case 'JUMP':
      return {
        ...state,
        xIsNext: action.payload.step % 2 === 0,
        history: state.history.slice(0, action.payload.step + 1),
      };
    case 'MOVE':
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};

const HorizonalBox = styled(Box)(() => ({
    
    gap: '20px', // edits the spacing of the components inside Icons 
    display: 'flex',
  }));

export default function Game() {
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }],
  });
  const { xIsNext, history } = state;
  const jumpTo = (step) => {
    dispatch({ type: 'JUMP', payload: { step } });
  };
  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    dispatch({ type: 'MOVE', payload: { squares } });
  };
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? winner === 'D'
      ? 'Draw'
      : 'Winner is ' + winner
    : 'Next player is ' + (xIsNext ? 'X' : 'O');

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Restart Game';
    return (
      <ListItem disablePadding sx={{paddingBottom: 1}} key={move}>
        <Button  sx={{width: 140}} variant='contained' onClick={() => jumpTo(move)}>{desc}</Button>
      </ListItem>
    );
  });

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
    >
        <HorizonalBox>
            <Box className={winner ? 'game disabled' : 'game'}>
            <Typography variant='h2'>Tic Tack Toe</Typography>
                <Box className="game-board">
                    <Board
                    onClick={(i) => handleClick(i)}
                    squares={current.squares}
                    ></Board>
                </Box>
            </Box>
        
        
            <Box className="game-info">
                <List sx={{paddingTop: 8}}><Typography variant='h6'>{status}</Typography>{moves}</List>
            </Box>
        </HorizonalBox>
    </Grid>
  );
}
const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let isDraw = true;
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
    if (!squares[a] || !squares[b] || !squares[c]) {
      isDraw = false;
    }
  }
  if (isDraw) return 'D';
  return null;
};