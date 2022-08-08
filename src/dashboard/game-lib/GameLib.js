import React from 'react'
import Navbar from '../../components/Navbar'

const title = 'Game Library'

const buttons = [
    'Dr. Nim',
    'Rock Paper Scissors',
    'Cards',
    'Tic Tac Toe',
]

export default function GameLib() {
  return (
    <Navbar title={title} buttons={buttons} />
  )
}
