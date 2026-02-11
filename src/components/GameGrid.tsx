import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GamesQuery } from "@/App";

interface Props {
  gameQuery: GamesQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>error</Text>}
      {games.length === 0 && <Text>No games found</Text>}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={3} padding={5}>
        {loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!loading &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
