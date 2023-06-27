import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
function Home() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">

                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="giga">
                                <NavLink
                                    to='/Home'
                                    className={({ isActive }) =>
                                        isActive ? 'link-clicado' : ''
                                    }
                                >
                                    GIGASTORE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to='/produtos'
                                    className={({ isActive }) =>
                                        isActive ? 'link-clicado' : ''
                                    }
                                >
                                    Catalogo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to='/cadastro'
                                    className={({ isActive }) =>
                                        isActive ? 'link-clicado' : ''
                                    }
                                >
                                    Cadastro de Produtos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

            <Outlet />

        </>
    )
}

export default Home