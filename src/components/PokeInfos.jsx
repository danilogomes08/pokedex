import React from 'react'
import './PokeInfos.css'

const PokeInfos = props => {
    return (
        <div className={`PokeInfos ${props.typePokemon}`}>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <p>
                    Nome: <strong>{props.name}</strong>
                </p>
                <p>
                    ID: <strong>{props.id}</strong>
                </p>
                <p>
                    Type: <strong>{props.type}</strong>
                </p>
                <p>
                    HP: <strong>{props.hp}</strong>
                </p>
                <p>
                    Ability: <strong>{props.abilities}</strong>
                </p>
                <p>
                    Move: <strong>{props.moves}</strong>
                </p>
            </div>
        </div>
    )
}

export default PokeInfos
