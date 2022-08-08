import { Box, ListItemButton } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameLib from './dashboard/game-lib/GameLib';
import Test from './components/Test';
import SodoFaculty from './dashboard/sodo-faculty/SodoFaculty';
import HardwareInventory from './dashboard/hardware-inventory/HardwareInventory';

export default function App() {
  return (
    /*
    <Box>
      <Navbar title={title} buttons={buttons}/>
      <Dashboard cardTitle={cardTitle} cardImage={cardImage} />
    </Box>
    */
   <Box>
    <HardwareInventory cardTitle={cardTitle} cardImage={cardImage} />
   </Box>
    
  )
}

const title = 'Dashboard';

const buttons = [
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
  'settings',
];

const cardTitle = ['Games', 'yey', 'fortnite', 'hello Worldsickomode', 'yeeto'];

const cardImage = ["https://th.bing.com/th/id/OIP.PUqMC9V3pmHgOdoOFnjDXAHaIP?w=170&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7", 
"https://th.bing.com/th/id/OIP.Z68HVcuLOtTZWAtbvDBbGAHaEz?w=256&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
"https://th.bing.com/th/id/OIP.dMc05QaZqP6XPF3hLUwcNAHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
"https://th.bing.com/th/id/OIP.Q7mkWzwCZuwRnflarqfH5wHaEM?w=326&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7",
"https://th.bing.com/th/id/OIP.btX8Jn-zsDwq0el8oatqZgHaLH?w=126&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7"]

