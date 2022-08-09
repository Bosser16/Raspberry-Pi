import { Box } from '@mui/material';
import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './dashboard/Dashboard';
import HardwareInventory from './dashboard/hardware-inventory/HardwareInventory';
import GameLib from './components/GameLib';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Images from './assets/Module-Loader'
import SodoDash from './dashboard/sodo-faculty/SodoDash';

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
                      links={dashboardLinks}
                    />} 
          />
          <Route 
            path="/game-library" 
            element={<GameLib />} 
          />
          <Route 
            path="/sodo-faculty" 
            element={<SodoDash people={people}/>} 
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
  <Images.Dashboard size={180} />,
  <Images.GameLib size={180} />,
  <Images.HardwareInventory size={180} />,
  "https://th.bing.com/th/id/OIP.Q7mkWzwCZuwRnflarqfH5wHaEM?w=326&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7",
];

// GAME LIBRARY
/*================================================================================================================================================*/


// SODO FACULTY
/*================================================================================================================================================*/

  /*person = [ 'name', 'picture', 'organization', 'title']*/

  const people = [ 
    {name:'Karen Fairclough', picture: 'https://th.bing.com/th/id/OIP.4oqLigFcEdVKP1Zj5-QGiwHaIL?w=165&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7g', organization: 'SODO/MXDES', title: 'SODO Section Chief” (Supervisor)'}, 
    {name: 'Kasey Thompson',picture:'logo192.png', organization:'SODO/MXDES', title:'SODO Program Director'},
    {name: 'Steve Turner',picture:'logo192.png', organization:'Launchpad', title:'Launchpad Program Director'},
    {name: 'Corbin Bell', picture:'logo192.png', organization:'SWEG University',title:'Organizational Training Program Manager'},
    {name: 'Tawnya Coulter',picture:'logo192.png', organization:'SWEG University', title:'Planner/Scheduler'},
    {name: 'Timothy Herrick',picture:'logo192.png', organization:'SWEG University', title:'Instructor; weekly TUGS facilitator'},
    {name: 'Sarah Nelson',picture:'logo192.png', organization:'SWEG Internships', title:'Intern Program Manager'},
    {name:'Cassie Unguren',picture:'logo192.png', organization:'SWEG New Hires',  title:'New Hire Coordinator Program Manager'},
    {name: 'Kammi Mears',picture:'logo192.png', organization:'SWEG Connections', title:'Retention and Mentoring Program Manager'},
    {name: 'Daniel Hillstead',picture:'logo192.png', organization:'SODO faculty', title:'manages Pluralsight licenses'},
    {name: 'Jesse Farb',picture:'logo192.png', organization:'SODO faculty', title:'UI/UX instructor'},
    {name: 'Ashlee Ward',picture:'logo192.png', organization:'SODO faculty', title:'Timesheets'},
    {name:'Jessica Collyer',picture:'logo192.png', organization:'SODO faculty', title:'rotating responsibilities'}
  ]

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