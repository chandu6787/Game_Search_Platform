import { GamesQuery } from '@/App'
import { Heading } from '@chakra-ui/react'
import React from 'react'
interface Props {
    gameQuery:GamesQuery
}
const GameHeading = ({gameQuery}: Props) => {
    const heading=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading marginBottom={5} as='h1' fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading