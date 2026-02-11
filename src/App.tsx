import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
export interface GamesQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
function App() {
const [gameQuery, setGameQuery] = useState<GamesQuery>({} as GamesQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav" >
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={5}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} />
      </GridItem>
      <GridItem area="main" >
        <HStack spacing={5} paddingLeft={5} marginBottom={1}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery, platform})} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})}  />
        </HStack>
         <GameGrid gameQuery={gameQuery} />

      </GridItem>
    </Grid>
  );
}

export default App;
