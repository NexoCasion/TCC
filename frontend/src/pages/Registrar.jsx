import React,{useState} from 'react'
import axios from 'axios';

function Registrar() {
    
    const [nome,setNome]= useState('');
    const [price,setPrice]= useState('');
    const [desc,setDesc]= useState('');
    const [imageUrl, setImageUrl]= useState('');
    const [createdAt, setCreatedAt]= useState('');

    const envioFormulario = (event)=>{
        event.preventDefault();
        cadastrarProduto();
    }

    function cadastrarProduto(){
        console.log(typeof(disponivel))
        axios.post('https://GIGA-suplements.com/products',{imageUrl,nome,desc,price,createdAt})
            .then(res=>console.log(res.data))
            .catch(erro=>console.log(erro))
    }
    return (
        <div >
            <h1 className='titulo'>Cadastre seu produto</h1>
            <div>
                <form id='form' onSubmit={envioFormulario}>
                <label className='dados' htmlFor="imageUrl">Imagem do produto:</label>
                    <input className='cx-text' 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        onChange={(e)=>setNome(e.target.value)}
                    />
                   
                    <label className='dados' htmlFor="nome">Nome do produto:</label>
                    <input className='cx-text' 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <label className='dados' htmlFor="desc">Descrição:</label>
                    <input className='cx-text' 
                        type="text" 
                        id="desc" 
                        name="desc" 
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                    <label className='dados' htmlFor="price">Preço:</label>
                    <input className='cx-text' 
                        type="number" 
                        id="price" 
                        name="price" 
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    
                    <button className='btn' type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    )
}

export default Registrar