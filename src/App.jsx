import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import PokemonContext from "./contexts/PokemonContext";
import styled from "@emotion/styled";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";

const Title = styled.h1`
  text-align: center;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // here we are passing it to the context instead of props
  const [filter, setFliter] = useState("");


  // console.log(selectedPokemon, "selected Pokemon");
  console.log(filter, "selected Pokemon");


  useEffect(() => {
    fetchData("/db.json");
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const { pokemon } = await response.json();
      // console.log(data);
      setPokemon(pokemon);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  if (!pokemon) {
    return <h1>Loading...</h1>;
  }

  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, selectedPokemon, setSelectedPokemon, filter, setFliter }}
    >
      <PageContainer>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
