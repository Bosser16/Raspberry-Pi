import { useNavigate } from "react-router-dom";
import {Card, CardContent, CardMedia, Typography, CardActionArea, } from '@mui/material';


export default function DashCard(props) {

let navigate = useNavigate(); 
const cardLink = ['/', '/gamelibrary', '/sodofaculty', '/hardwareinventory', 'FAQ'];


const MakeDashCards = (props.cardImage.map((insertImg, index) => (
<Card sx={{ width: 200, height: 300}}>
      <CardActionArea onClick={()=>{navigate(cardLink[index])}}>
      <CardMedia
        component="img"
        height={230}
        image={insertImg}
        alt="( ͡~ ͜ʖ ͡°) Hello There, it seems you are missing an image ( ͡° ͜ʖ ͡°)"
      />
      <CardContent sx={{padding:0}}>
        <Typography 
        display={"flex"} variant="h5" component="div" justifyContent={"center"} 
        height={70} backgroundColor="#3F51B5" color={"white"} alignItems={"center"}> 
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

