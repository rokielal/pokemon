import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContext from "../contexts/PokemonContext";

const Input = styled.input`
  width: 50%;
  padding: 0.5rem;
  font-size: small;
  border-radius: 5px;
`;

function PokemonFilter() {
  const { filter, setFliter } = useContext(PokemonContext);
  return (
    <Input
      value={filter}
      type="text"
      onChange={(event) => setFliter(event.target.value)}
    />
  );
}

export default PokemonFilter;
