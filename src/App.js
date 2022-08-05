import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './dashboard/Dashboard';

const title = 'Dashboard';
const buttons = ['settings', 'settings', 'settings', 'settings', 'settings', 'settings', 'settings', 'settings', 'bruh', 'yey'];
const cardTitle = ['Lizard', 'Deez', 'Games', 'yey', 'fortnite', 'hello Worldsickomode'];

export default function App() {
  return (
    <Box>
      <Navbar title={title} buttons={buttons}/>
      <Dashboard cardTitle={cardTitle}/>
    </Box>
  )
}

