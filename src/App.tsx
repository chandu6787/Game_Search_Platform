import { useState } from "react";
import "./App.css";
import { Provider } from "@/components/ui/provider";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}

        templateColumns={{ base: "1fr", lg: "200px 1fr" }}

    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
        <GridItem area="aside" bg="lightblue"   display={{ base: "none", lg: "block" }}
>
          Sidebar
        </GridItem>
      <GridItem area="main" bg="lavender">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
