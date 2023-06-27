import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Card(props) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    props.deleteProduto(props._id);
  };

  return (
    <div className={`grid ${isDeleting ? 'disappear' : ''}`}>
      <div className={`card ${isDeleting ? 'disappear' : ''}`} key={props._id}>
        <img className='imgcard' src={props.imageUrl} alt={props.nome} />
      </div>
      <div className='info-card'>
        <h2>{props.nome}</h2>
        <p>{props.desc} </p>
        <p>R$ {props.price}.00</p>
        <div className="lixo" onClick={handleDelete}>
          <FaTrash size={32} />
        </div>
      </div>
    </div>
  );
}

export default Card;
