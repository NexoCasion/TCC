import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
function Produtos() {
    const [produtos,setProdutos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/produtos')
            .then(res=>{
              console.log(res.data)
              setProdutos(res.data)
            })
            .catch(err=>console.log(err))
    },[])
  return (
    <div className='space-top'>
        <h1> Produtos </h1>
        
        {
            produtos.map(p=> <Card {...p}/>
            )
        }
        
    </div>
  )
}

export default Produtos