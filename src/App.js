import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './dashboard/Dashboard';
import HardwareInventory from './dashboard/hardware-inventory/HardwareInventory';
import GameLib from './components/GameLib';
import ErrorPage from './components/ErrorPage';
import SodoFaculty from './dashboard/sodo-faculty/SodoFaculty';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <Box>
      <Router>
        <Navbar title={title} buttons={buttons} links={dashboardLinks} />
        <Routes>
          <Route 
            path="/" 
            element={<Dashboard 
                      cardTitle={dashboardCardTitle} 
                      cardImage={dashboardCardImage} 
                      links={dashboardLinks}/>} 
          />
          <Route 
            path="/game-library" 
            element={<GameLib />} 
          />
          <Route 
            path="/sodo-faculty" 
            element={<SodoFaculty />} 
          />
          <Route 
            path="/hardware-inventory" 
            element={<HardwareInventory 
                      cardTitle={hardwareInventoryCardTitles} 
                      cardImage={hardwareInventoryCardImages}
                      cardLinks={hardwareInventoryLinks}
                    />} 
          />
          <Route 
            path="*" 
            element={<ErrorPage />} 
          />
        </Routes>
      </Router>
    </Box>
  )
}
// DASHBOARD
/*================================================================================================================================================*/

const title = 'Dashboard';

const buttons = [
  'Home',
  'Game Library',
  'Sodo Faculty',
  'Hardware Inventory'
];

const dashboardLinks = ["/", "/game-library", "/sodo-faculty", "/hardware-inventory", "*"]

const dashboardCardTitle = ['Home', 'Game Library', 'Sodo Faculty', 'Hardware Inventory'];

const dashboardCardImage = [
  "https://th.bing.com/th/id/OIP.PUqMC9V3pmHgOdoOFnjDXAHaIP?w=170&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7", 
  "https://th.bing.com/th/id/OIP.Z68HVcuLOtTZWAtbvDBbGAHaEz?w=256&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.dMc05QaZqP6XPF3hLUwcNAHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.Q7mkWzwCZuwRnflarqfH5wHaEM?w=326&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.btX8Jn-zsDwq0el8oatqZgHaLH?w=126&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7"
];

// GAME LIBRARY
/*================================================================================================================================================*/


// SODO FACULTY
/*================================================================================================================================================*/


// HARDWARE INVENTORY
/*================================================================================================================================================*/

const hardwareInventoryLinks = ["/thanos", "/recrobot", "/cypher", "/pepper"];

const hardwareInventoryCardTitles = ['Thanos', 'Rec Robot', 'Cypher', 'Pepper'];

const hardwareInventoryCardImages = [
  "https://th.bing.com/th/id/OIP.PUqMC9V3pmHgOdoOFnjDXAHaIP?w=170&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7", 
  "https://th.bing.com/th/id/OIP.Z68HVcuLOtTZWAtbvDBbGAHaEz?w=256&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.dMc05QaZqP6XPF3hLUwcNAHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.Q7mkWzwCZuwRnflarqfH5wHaEM?w=326&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7",
  "https://th.bing.com/th/id/OIP.btX8Jn-zsDwq0el8oatqZgHaLH?w=126&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7"
];