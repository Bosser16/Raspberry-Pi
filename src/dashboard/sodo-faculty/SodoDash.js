import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import SodoFaculty from './SodoFaculty'

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
})

export default function SodoDash({people}) {
  return (
    <StyledBox 
      flexGrow={1}
      paddingTop={5}
    >
      <Grid
        container
        spacing={0}
        paddingLeft={10}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
        width={1600}
      >
        <Grid
          container
          spacing={1}
          padding={1}
          direction="row"
          gap={8}
        > 
          <SodoFaculty people={people} />
        </Grid>
      </Grid>
    </StyledBox> 
  )
}
