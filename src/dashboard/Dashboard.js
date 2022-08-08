import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import DashCard from '../components/DashCard'

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
})

export default function Dashboard({cardTitle, cardImage}) {
  return (
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
        <Grid
          container
          spacing={1}
          padding={1}
          direction="row"
          gap={8}
        > 
          <DashCard cardImage={cardImage} cardTitle={cardTitle}/>
        </Grid>
      </Grid>
    </StyledBox> 
  )
}
