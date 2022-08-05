import { Button, styled, Typography } from '@mui/material'
import React from 'react'

const SquareButton = styled(Button)({
    height: '150px',
    width: '150px',
  });

export default function Square(props) {

  return (
    <SquareButton variant='outlined' onClick={props.onClick}>
        <Typography variant='h1'>{ props.value }</Typography>
    </SquareButton>
  )
}
