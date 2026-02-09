import { Box } from '@chakra-ui/react'
import React from 'react'
interface Props {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" width={{ base: "100%", md: "300px" }} borderRadius={10}>
      {children}
    </Box>
  )
}

export default GameCardContainer