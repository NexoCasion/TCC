import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Home() {
  return (
    <>

   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">Home</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <NavLink
                        to='/'
                        className={({isActive})=>
                            isActive ? 'link-clicado' : ''
                        }
                    >
                        Home
                    </NavLink>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <NavLink
                        to='/cadastro'
                        className={({isActive})=>
                            isActive ? 'link-clicado' : ''
                        }
                    >
                        Cadastre seu produto
                    </NavLink>
            </li>
            <li class="nav-item">
            <NavLink
                        to='/produtos'
                        className={({isActive})=>
                            isActive ? 'link-clicado' : ''
                        }
                    >
                        Lista de Produtos
                    </NavLink>
            </li>
            
        </ul>
        
        </div>
    </div>
    </nav>


    <Outlet/>
    </>
  )
}

export default Home