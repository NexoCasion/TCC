import React from 'react'

function Card(props) {
  return (
    <div key={props._id}>
        <h2>{props.nome}</h2>
        <p>{props.desc} </p>
        <p>{props.price}</p>
        <img src={props.imageUrl} alt={props.nome} />
        <p>{props.createdAt}</p>
    </div>
  )
}

export default Card