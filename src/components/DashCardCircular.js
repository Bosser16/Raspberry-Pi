import {Card, Typography, CardActionArea, styled, Box, } from '@mui/material';

const CircularCard = styled(Box)({
  width: '200px',
  height: '200px',  
})

const CircularImg = styled(Card)({
  display: 'flex',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center'
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
            <CircularImg>{insertImg}</CircularImg>
        </CircularCardActionArea>
        <Typography textAlign='center'>{props.cardTitle[index]}</Typography>
    </CircularCard>

)))

  return (
    
    MakeCircularDashCards
    
  );
}