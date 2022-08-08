import {Card, Typography, CardActionArea, styled, Box, } from '@mui/material';

const CircularCard = styled(Box)({
  width: '200px',
  height: '200px',  
})

const CircularImg = styled(Card)({
  width: '200px',
  height: '200px',
  backgroundPosition: 'center',
  borderRadius: '50%',
})

const CircularCardActionArea = styled(CardActionArea)({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
})

export default function DashCardCircular(props) {

const MakeCircularDashCards = (props.cardImage.map((insertImg, index) => (
    
    <CircularCard>
        <CircularCardActionArea onClick={()=>/*Insert Function*/alert("add function")}>
            <CircularImg 
            sx={{
                backgroundImage: `url(${insertImg})`,
            }}
            />
        </CircularCardActionArea>
        <Typography textAlign='center'>{props.cardTitle[index]}</Typography>
    </CircularCard>

)))

  return (
    
    MakeCircularDashCards
    
  );
}