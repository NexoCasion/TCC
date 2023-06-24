import React from 'react'
import "./Card.css"
function Card(props) {
  return (
  <div className='grid'> 
    <div className='grid_item'>
    <div className='Card' key={props._id}>
        <img className='imgcard' src={props.imageUrl} alt={props.nome} />
            <div className='text-card'>

            <h2>{props.nome}</h2>
            <p>{props.desc} </p>
            <p>{props.price}</p>

            </div>
     </div>
    </div>
  </div>
  )
}

export default Card