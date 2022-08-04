
import {Button} from '@mui/material';
import React from "react"
import ReactDOM from "react-dom"
import App from './App';


export default function Footer () {
    return (
        <Button onClick={AppCall}>
            Back to Home
        </Button>
    );
}

function AppCall() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  }
  