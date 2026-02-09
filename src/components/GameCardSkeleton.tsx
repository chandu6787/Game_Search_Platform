import React from 'react'
import { Card, Skeleton, SkeletonText, CardBody, HStack, SkeletonCircle, Box } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="100%" borderRadius={10} overflow="hidden">
      <Skeleton height={{ base: "200px", md: "220px" }} />
      <CardBody>
        <Skeleton height="28px" width="70%" mb={3} />
        <HStack justifyContent="space-between">
          <Skeleton height="20px" width="120px" />
          <SkeletonCircle size="10" />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton