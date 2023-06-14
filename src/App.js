import './App.css';
import { useState, useEffect } from 'react'
import Axios from 'axios';
import PokeForm from './components/PokeForm'
import AllPoke from './components/AllPoke'
import PokeInfos from './components/PokeInfos'
import Pokedex from './img/pokedex-logo.png'


function App() {

  const [pokemonName, setpokemonName] = useState('')
  const [pokemonData, setpokemonData] = useState({})
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const searchPokemon = () => {
    const pokemon = pokemonName.toLowerCase().split(" ").join("");
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((resp) => {
        setpokemonData({
          name: resp.data.name,
          id: resp.data.id,
          abilities: resp.data.abilities[0].ability.name,
          image: resp.data.sprites.versions['generation-v']['black-white'].animated.front_default 
          ? resp.data.sprites.versions['generation-v']['black-white'].animated.front_default 
          : resp.data.sprites.front_default,
          type: resp.data.types[0].type.name,
          moves: resp.data.moves[0].move.name,
          hp: resp.data.stats[0].base_stat
        })
      }
      );
    clear()
  }

  const random = () => {
    const pokeRandom = Math.floor(Math.random() * (898 - 1)) + 1;
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeRandom}`)
      .then((resp) => {
        setpokemonData({
          name: resp.data.name,
          id: resp.data.id,
          abilities: resp.data.abilities[0].ability.name,
          image: resp.data.sprites.versions['generation-v']['black-white'].animated.front_default 
          ? resp.data.sprites.versions['generation-v']['black-white'].animated.front_default 
          : resp.data.sprites.front_default,
          type: resp.data.types[0].type.name,
          moves: resp.data.moves[0].move.name,
          hp: resp.data.stats[0].base_stat
        })
      }
      );
    clear()
  }

//   console.log(allPokemons)

//   const getAllPokemons = async () => {
//    const res = await fetch(loadMore)
//    const data = await res.json()

//    setLoadMore(data.next)

//    function createPokemonObject(results)  {
//      results.forEach( async pokemon => {
//        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//        const data =  await res.json()
//        setAllPokemons( currentList => [...currentList, data])
//        await allPokemons.sort((a, b) => a.id - b.id)
//      })
//    }
//    createPokemonObject(data.results)
// }

// useEffect(() => {
//   getAllPokemons()
//   }, [])


//   const typePokemonAll = () => {
//     if (allPokemons.type === "fairy") return "Fairy"
//     if (allPokemons.type === "steel") return "Steel"
//     if (allPokemons.type === "dark") return "Dark"
//     if (allPokemons.type === "dragon") return "Dragon"
//     if (allPokemons.type === "ghost") return "Ghost"
//     if (allPokemons.type === "rock") return "Rock"
//     if (allPokemons.type === "bug") return "Bug"
//     if (allPokemons.type === "psychic") return "Psychic"
//     if (allPokemons.type === "ground") return "Ground"
//     if (allPokemons.type === "poison") return "Poison"
//     if (allPokemons.type === "fighting") return "Fighting"
//     if (allPokemons.type === "ice") return "Ice"
//     if (allPokemons.type === "grass") return "Grass"
//     if (allPokemons.type === "electric") return "Electric"
//     if (allPokemons.type === "normal") return "Normal"
//     if (allPokemons.type === "water") return "Water"
//     if (allPokemons.type === "fire") return "Fire"

//     return ""
//   }

  const typePokemon = () => {
    if (pokemonData.type === "fairy") return "Fairy"
    if (pokemonData.type === "steel") return "Steel"
    if (pokemonData.type === "dark") return "Dark"
    if (pokemonData.type === "dragon") return "Dragon"
    if (pokemonData.type === "ghost") return "Ghost"
    if (pokemonData.type === "rock") return "Rock"
    if (pokemonData.type === "bug") return "Bug"
    if (pokemonData.type === "psychic") return "Psychic"
    if (pokemonData.type === "ground") return "Ground"
    if (pokemonData.type === "poison") return "Poison"
    if (pokemonData.type === "fighting") return "Fighting"
    if (pokemonData.type === "ice") return "Ice"
    if (pokemonData.type === "grass") return "Grass"
    if (pokemonData.type === "electric") return "Electric"
    if (pokemonData.type === "normal") return "Normal"
    if (pokemonData.type === "water") return "Water"
    if (pokemonData.type === "fire") return "Fire"

    return ""
  }

  const clear = () => {
    setpokemonName('')
  }

  return (
    <div className="App">

      <img src={Pokedex} />

      {/* <div className="AllPoke">
        { allPokemons.map( (pokemon, index) =>
        
          <AllPoke 
              id={pokemon.id}
              img={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
              name={pokemon.name}
              key={index}
              typePokemon={typePokemonAll()}
          />
        )}
      </div> */}


      <PokeForm
        handleChange={(e) => { setpokemonName(e.target.value) }}
        value={pokemonName}
        searchPokemon={searchPokemon}
        random={random}
      />

      {pokemonData.id ? (
        <PokeInfos
          typePokemon={typePokemon()}
          name={pokemonData.name}
          id={pokemonData.id}
          type={pokemonData.type}
          hp={pokemonData.hp}
          abilities={pokemonData.abilities}
          moves={pokemonData.moves}
          image={pokemonData.image}
        />
      ) : (
        false
      )}

    </div>
  );
}

export default App;
