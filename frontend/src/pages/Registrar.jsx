import React,{useState} from 'react'
import axios from 'axios';

function Registrar() {
    const [disponivel,setDisponivel] = useState(false);
    const [nome,setNome]= useState('');
    const [price,setPrice]= useState('');
    const [desc,setDesc]= useState('');
    const handleCheckboxChange = (event)=>{
        setDisponivel(event.target.checked);
    }

    const envioFormulario = (event)=>{
        event.preventDefault();
        cadastrarProduto();
    }

    function cadastrarProduto(){
        console.log(typeof(disponivel))
        axios.post('https://loja-turma-terca-super-geeks.onrender.com/products',{disponivel,nome,desc,price})
            .then(res=>console.log(res.data))
            .catch(erro=>console.log(erro))
    }
    return (
        <div>
            <h1>Cadastre seu produto</h1>
            <div>
                <form onSubmit={envioFormulario}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <label htmlFor="desc">desc</label>
                    <input 
                        type="text" 
                        id="desc" 
                        name="desc" 
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                    <label htmlFor="price">price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    <label htmlFor="disponivel"> Produto Disponivel:</label>
                    <input 
                        type="checkbox" 
                        name="disponivel" 
                        id="disponivel" 
                        checked={disponivel}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="nDisponivel"> Produto Não Disponivel:</label>
                    <input 
                        type="checkbox" 
                        name="nDisponivel" 
                        id="nDisponivel" 
                        checked={!disponivel}
                        onChange={handleCheckboxChange}
                    />
                    <button type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    )
}

export default Registrar