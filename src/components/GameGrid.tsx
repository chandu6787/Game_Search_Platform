import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>error</Text>}
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} padding={5}>
        {loading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading && games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
