import React, { useState, useEffect } from 'react'
import PokemonThumnail from './components/PokemonThumnail'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result){
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        
        setAllPokemons(curentList => [...curentList, data])
      
      
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)

  }
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="container m-auto app-container">
      <h1>PokeDex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) =>  
            <PokemonThumnail
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key = {index}
            />
            )}
        </div>
          <button onClick={() => getAllPokemons()} className="load-more">Load More</button>
      </div>
    </div>
  );
}

export default App;
