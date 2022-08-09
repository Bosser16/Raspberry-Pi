import { useNavigate } from "react-router-dom";
import {Card, CardContent, CardMedia, Typography, CardActionArea, } from '@mui/material';

export default function DashCard(props) {
  
let navigate = useNavigate(); 

const MakeDashCards = (props.cardImage.map((insertImg, index) => (
<Card key={index} sx={{ width: 200, height: 300}}>
      <CardActionArea onClick={()=>{navigate(props.links[index])}}>
      <CardMedia
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 5.1,
        }}
      >
        {insertImg}
      </CardMedia>
      <CardContent 
        sx={{
          padding: 0,
        }}
      >
        <Typography 
          display={"flex"} 
          variant="h6" 
          component="div" 
          justifyContent={"center"} 
          height={70} 
          backgroundColor="#3F51B5" 
          color={"white"} 
          alignItems={"center"}
        > 
          {props.cardTitle[index]}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
      )))

  return (
    
    MakeDashCards
    
  );
}

