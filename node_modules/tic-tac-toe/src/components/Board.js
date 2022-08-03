import { Grid } from '@mui/material';
import React from 'react';
import Square from './Square';

export default function Board(props) {
  return (
    <Grid 
        container
        justifyContent='flex-start'
        height={450}
        width={450}
    >
        <Grid item xs='4'>
            <Square 
                value={ props.squares[0] } 
                onClick={() => { 
                    props.onClick(0) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[1] } 
                onClick={() => { 
                    props.onClick(1) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[2] } 
                onClick={() => { 
                    props.onClick(2) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[3] } 
                onClick={() => { 
                    props.onClick(3) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[4] } 
                onClick={() => { 
                    props.onClick(4) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[5] } 
                onClick={() => { 
                    props.onClick(5) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[6] } 
                onClick={() => { 
                    props.onClick(6) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[7] } 
                onClick={() => { 
                    props.onClick(7) }} 
            />
        </Grid>
        <Grid item xs='4'>
            <Square 
                value={ props.squares[8] } 
                onClick={() => { 
                    props.onClick(8) }} 
            />
        </Grid>
    </Grid>
  )
}
