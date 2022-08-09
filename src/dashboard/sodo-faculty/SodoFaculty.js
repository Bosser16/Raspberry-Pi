import React from 'react';
import {Card, CardContent, CardMedia, Typography } from '@mui/material';


export default function SodoFaculty(people) { 
  console.log(people)
  const MakeSodoCards = (people.map(({name, picture}) => (
  <Card key={name} sx={{ width: 200, height: 300}}>
        <CardMedia
          component="img"
          height={230}
          image={picture}
          alt="( ͡~ ͜ʖ ͡°) Hello There, it seems you are missing an image ( ͡° ͜ʖ ͡°)"
        />
        <CardContent sx={{padding:0}}>
          <Typography 
          display={"flex"} variant="h6" component="div" justifyContent={"center"} 
          height={70} backgroundColor="#3F51B5" color={"white"} alignItems={"center"}> 
            {name}
          </Typography>
        </CardContent>
      </Card>
        )))
  
    return (
      
      MakeSodoCards
      
    );
  }
