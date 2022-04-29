import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import PokeForm from './components/PokeForm'
import PokeInfos from './components/PokeInfos'


function App() {

  const [pokemonName, setpokemonName] = useState('')
  const [pokemonData, setpokemonData] = useState({})

  const searchPokemon = () => {
    const pokemon = pokemonName.toLowerCase().split(" ").join("");
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((resp) => {
        setpokemonData({
          name: resp.data.name,
          id: resp.data.id,
          abilities: resp.data.abilities[0].ability.name,
          image: resp.data.sprites.front_default,
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
          image: resp.data.sprites.front_default,
          type: resp.data.types[0].type.name,
          moves: resp.data.moves[0].move.name,
          hp: resp.data.stats[0].base_stat
        })
      }
      );
    clear()
  }

  const clear = () => {
    setpokemonName('')
  }

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

  return (
    <div className="App">

      <h1> Pokedex </h1>

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
