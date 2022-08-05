
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';


export default function DashCard(props) {
  return (
    <Card sx={{ width: 200, height: 300, margin: "20px"}}>
      <CardActionArea onClick={/*Insert Function*/console.log("add function")}>
      <CardMedia
        component="img"
        height={200}
        image={props.Img}
        alt="( ͡~ ͜ʖ ͡°) Hello There"
      />
      <CardContent>
        <Typography variant="h5" component="div" textAlign={"center"}>
          {props.Title}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
