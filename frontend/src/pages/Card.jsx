import React from 'react'

function Card(props) {
  return (
    <div key={props._id}>
        <h2>{props.nome}</h2>
        <p>{props.desc} </p>
        <p>{props.price}</p>
        <p>{props.imageUrl}</p>
        <p>{props.createdAt}</p>
    </div>
  )
}

export default Card