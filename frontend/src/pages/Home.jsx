import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import "./NavBar.css"
function Home() {
  return (
    <>

   <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
        <NavLink
                        to='/'
                        className={({isActive})=>
                            isActive ? 'link-clicado' : ''
                        }
                    >
                        Home
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
            
        </ul>
        
        </div>
    </div>
    </nav>
<div className="teste">
    <Outlet/>
</div>
    </>
  )
}

export default Home