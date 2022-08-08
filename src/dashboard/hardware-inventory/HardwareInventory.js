import { Box, Grid, InputBase, styled, Typography } from '@mui/material'
import React from 'react'
import DashCardCircular from '../../components/DashCardCircular'

  const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
  })

  const RightJustifyBox = styled(Box)({
    display: 'flex',
    justifyContent: 'end',
  })

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    border: '1px solid grey',
    borderRadius: theme.shape.borderRadius, // sets the border radius to the same as the theme
    width: '250px',
  }));
  
  export default function HardwareInventory({cardTitle, cardImage}) {
    return (
      <Box>
        <RightJustifyBox
          paddingTop={3}
          paddingRight={3}
        >
          <Search><InputBase placeholder="search..."/></Search>
        </RightJustifyBox>
        <StyledBox 
          flexGrow={1}
          paddingTop={5}
        >
          <Grid
            container
            spacing={0}
            paddingLeft={1}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh' }}
            width={1008}
          >
            <Typography 
              variant='h4'
              paddingBottom={2}
              textAlign='center'
            >
              Welcome to the Hardware Inventory</Typography>
            <Typography>Choose a Category</Typography>
            <Grid
              container
              spacing={1}
              padding={1}
              direction="row"
              gap={8}
              paddingTop={5}
            > 
              <DashCardCircular cardImage={cardImage} cardTitle={cardTitle}/>
            </Grid>
          </Grid>
        </StyledBox> 
      </Box>
    )
  }
