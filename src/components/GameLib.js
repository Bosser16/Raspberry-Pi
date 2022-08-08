import React from "react"
import TicTacToe from '../dashboard/game-lib/tic-tac-toe/TicTacToe.js'
import CardGame from '../dashboard/game-lib/simple-card-game/Cards';
import DrNim from '../dashboard/game-lib/dr-nim-game/DrNim';
import Roshambo from "../dashboard/game-lib/rock-paper-scissors/Roshambo";
import {ListItemButton, ListItemText, Box, List, ListItem, Drawer, Button } from '@mui/material';


export default function GameLib() {

  const [state, setState] = React.useState({gamLib: true});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const nameArray = ["Dr. Nim", "Card Dealer", "TicTacToe", "Rock Paper Scissors"];
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
        {(['Game Library']).map((anchor) => (
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
  