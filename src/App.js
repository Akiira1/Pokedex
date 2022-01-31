import React, { useState, useEffect } from 'react'
import PokemonThumnail from './components/PokemonThumnail'
import SearchBar from './components/SearchBar'

function App() {
  //création constante avec 2 parametres pour pouvoir utiliser la methode useState() de React
  const [allPokemons, setAllPokemons] = useState([]) // déclarer une array vide comme . de départ !
  //Bouton de chargement des 20 prochains pokemons
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  


  //const des 20 premiers pokémons!
  const getAllPokemons = async () => {
    //je réutilise le bouton des 20 pokemons pour charger directement les 20 premiers
    const res = await fetch(loadMore)
    //conversion avec methode json() pour rendre les informations récolté visible en []
    const data = await res.json()

    //appel de l'element "next" dans les donné recu qui renvois les 20 pokemons suvants
    
    console.log(data)
    setLoadMore(data.next)

    // création de l'array d'objets comprenent les pokemons
    function createPokemonObject(result){
      //pour chaque resultat, renvoyer pokemon.name dans l'array
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        
        setAllPokemons(curentList => [...curentList, data])
      })
    }
    //appel des resultats
    createPokemonObject(data.results)

  }

  // appel de la fonction 
  useEffect(() => {
    getAllPokemons()
  }, [])


  return (
    <div className="container m-auto global">
      <h1>PokeDex</h1>
      <SearchBar />
      <div className="pokemons-container">
        <div className="all-pokemons">
          {allPokemons.map((pokemon, index) =>  
            <PokemonThumnail
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
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
