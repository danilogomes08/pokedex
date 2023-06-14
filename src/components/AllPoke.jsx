import React from 'react'
import './AllPoke.css'

const AllPoke = props => {
    return (
        <div className={`Cards ${props.typePokemon}`}>
            <small>#{props.id} </small>
            <img src={props.img} />
            <p> {props.name} </p>
        </div>
    )
}

export default AllPoke
