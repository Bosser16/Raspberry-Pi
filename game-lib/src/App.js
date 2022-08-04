import React from "react"
import TicTacToe from './tic-tac-toe/src/TicTacToe';
import CardGame from './SimpleCardGame/cards/src/Cards';
import DrNim from './dr-nim-game/src/DrNim';
import Roshambo from "./RockPaperScissors/src/Roshambo";
import './App.css'
import {ListItemButton, ListItemText, Box, List, ListItem, Drawer, Button } from '@mui/material';


export default function App() {

  const [state, setState] = React.useState({gamLib: true});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const nameArray = ["Dr. Nim", "Card Game", "TicTacToe", "Rock Paper Scissors"];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          {[DrNim, CardGame, TicTacToe, Roshambo].map((func, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={func}>
              <ListItemText primary={nameArray[index]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
    {(["Game Library"]).map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
  );
  }
