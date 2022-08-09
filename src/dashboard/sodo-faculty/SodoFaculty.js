import {Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function SodoFaculty(props) { 
  const MakeDashCards = (props.people.map(({name, picture, organization, title}) => (
    <Card key={name} sx={{ width: 300, height: 400}}>
          <CardMedia
            component="img"
            height={315}
            image={picture}
            alt="( ͡~ ͜ʖ ͡°) Hello There, it seems you are missing an image ( ͡° ͜ʖ ͡°)"
          />
          <CardContent 
            sx={{
              padding: 0,
            }}
          >
            <Typography 
              fontSize={9}
              textAlign="center"
              backgroundColor="#3F51B5" 
              color={"white"} 
              alignItems={"center"}
            > 
              {organization}
            </Typography>
            <Typography 
              fontSize={18}
              textAlign="center"
              backgroundColor="#3F51B5" 
              color={"white"} 
              alignItems={"center"}
            > 
              {name}
            </Typography>
            <Typography 
              fontSize={11}
              paddingBottom={10}
              textAlign="center"
              backgroundColor="#3F51B5" 
              color={"white"} 
              alignItems={"center"}
            > 
              {title}
            </Typography>
          </CardContent>
        </Card>
          )))
    
      return (
        
        MakeDashCards
        
      );
  }
