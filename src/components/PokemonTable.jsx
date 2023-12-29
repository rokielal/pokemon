import React from 'react'
import PokemonContext from '../contexts/PokemonContext';
import { useContext } from 'react';
import PokemonRow from './PokemonRow';

function PokemonTable() {

    const { pokemon, setSelectedPokemon, filter } = useContext(PokemonContext);
    // console.log(pokemon);

  return (
    <table width='100%'>
        <tbody>
            {
                pokemon.filter(({name:{english}})=>english.toLowerCase().includes(filter.toLowerCase())
                )?.slice(0,25).map((pokemon)=>(
                    <PokemonRow key={pokemon.id} pokemon={pokemon} onClick= {(pokemon)=>setSelectedPokemon(pokemon)}/>
                ))
            }
            {/* we used .slice bcz we have 800 data to get data from 0 to 20 we used slice method */}
        </tbody>

    </table>
  )
}

export default PokemonTable
