import {Card, CardContent, CardMedia, Typography, CardActionArea, } from '@mui/material';

export default function DashCard(props) {

const MakeDashCards = (props.cardImage.map((insertImg, index) => (
<Card sx={{ width: 200, height: 300}}>
      <CardActionArea onClick={()=>/*Insert Function*/alert("add function")}>
      <CardMedia
        component="img"
        height={230}
        image={insertImg}
        alt="( ͡~ ͜ʖ ͡°) Hello There"
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

