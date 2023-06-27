import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Principal() {
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
            .then(res => {
                console.log(res.data)
                setProdutos(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (<>
        <div className='home'>
            <div className='tituloHome'>
                <h1 className='header'>Seja Bem Vindo a GigaStore</h1>
                <h2 className='sub'>Aqui você encontrará os melhores suplementos, com o melhor custo benefício do mercado!!!</h2>
            </div>
            <div className='intro'>
                <div className='place-C'>
                    <div className='carrosel'>
                        <div >
                            <Slider {...settings}>
                                {produtos.map(p => (
                                    <div className="ftsC" key={p._id}>
                                        <img className='img-carrosel' src={p.imageUrl} alt={p.nome} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text1'>
            <div className='text2'>
                <h3 className='text4'>Temos Produtos variados, desde suplementação à acessorios que vão te ajudar
                    a chegar cada vez mais rapido e cada vez mais perto aos seus objetivos. </h3>
            </div>
            <div className='text3'>
                <a href='http://localhost:3000/produtos' className='btn'> Acesse nosso catálogo!!! </a>
            </div>
        </div>
    </>
    );
}

export default Principal;
