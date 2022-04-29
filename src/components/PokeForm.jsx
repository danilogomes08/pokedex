import React from 'react'
import './PokeForm.css'

const PokeForm = props => {

    return (
        <div className="PokeForm">
        <input className="InputPoke" type="text"
          placeholder="Search for a pokemon"
          onChange={props.handleChange}
          value={props.value}
        />

        <button className="PokeButton"
          onClick={props.searchPokemon}
        >
          Search
        </button>

        <button className="RandomButton"
          onClick={props.random}
        >
          Random
        </button>
      </div>
    )
}

export default PokeForm