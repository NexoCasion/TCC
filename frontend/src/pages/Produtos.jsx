import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/produtos')
      .then(res => {
        console.log(res.data)
        setProdutos(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  const updateProduto = (id, nome, price, desc, imageUrl) => {
    axios.put(`http://localhost:3001/produtos/${id}`, { imageUrl, nome, desc, price })
      .then(res => {
        console.log(res.data)
        let newUpdatedLists = produtos.map(p => {
          if (p._id === id) {
            return res.data
          }
          return p
        })
        setProdutos(newUpdatedLists)
      })
      .catch(erro => console.log(erro))
  }

  const deleteProduto = (id) => {
    axios.delete(`http://localhost:3001/produtos/${id}`)
      .then(res => {
        const produtoUpd = produtos.filter(p => p._id !== id)
        setProdutos(produtoUpd)
      })
      .catch(erro => console.log(erro))
  }

  return (
    <>
      <div >
        <h1 className='tituloP'> Nossos Produtos </h1>
      </div>
      <div>
        <div>
          <div className='produtos'>

            {
              produtos.map(p => <Card key={p._id} {...p} deleteProduto={deleteProduto} />
              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Produtos