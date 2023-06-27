import React, { useState } from 'react'
import axios from 'axios';


function Registrar() {

    const [nome, setNome] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const envioFormulario = (event) => {
        event.preventDefault();
        cadastrarProduto();
    }

    function cadastrarProduto() {
        console.log(typeof (disponivel))
        axios.post('http://localhost:3001/produtos', { imageUrl, nome, desc, price })
            .then(res => console.log(res.data))
            .catch(erro => console.log(erro))
    }
    return (
        <div className='tdR'>
            <h1 className='tituloC'>Cadastre seu produto</h1>
            <div >
                <form id='form' onSubmit={envioFormulario}>
                    <label htmlFor="imageUrl">Imagem do produto:</label>
                    <input className='cx-text'
                        placeholder='Insira a Url da imagem...'
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={(e) => setImageUrl(e.target.value)}

                    />

                    <label htmlFor="nome">Nome do produto:</label>
                    <input className='cx-text'
                        placeholder='Insira o nome do produto...'
                        type="text"
                        id="nome"
                        name="nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <label htmlFor="desc">Descrição:</label>
                    <input className='cx-text'
                        placeholder='Insira uma descrição...'
                        type="text"
                        id="desc"
                        name="desc"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <label htmlFor="price">Preço:</label>
                    <input className='cx-text'
                        placeholder='Insira o Valor do Produto...'
                        type="number"
                        id="price"
                        name="price"
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button className='btn' type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    )
}

export default Registrar