import {Card, CardContent, CardMedia, Typography } from '@mui/material';

<<<<<<< HEAD
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
=======
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
>>>>>>> 2b242c0eb7e1669861ef3029d5472a7d10fe2ed4
  }
