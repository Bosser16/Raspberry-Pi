import React from 'react'
import { Box, Card, CardContent, Grid, styled, Typography } from '@mui/material'

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
})

export default function Dashboard({cardTitle}) {
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
          {cardTitle.map(cardTitle => (
            <Card sx={{height: 300, width: 200,}}>
              <CardContent>
                <Typography textAlign='center'>{cardTitle}</Typography> 
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </StyledBox> 
  )
}
