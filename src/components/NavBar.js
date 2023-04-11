import React from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navBarContainer">
                <div className="container-fluid">
                    <Link to="/" className="nav-link col-7"><img src="https://i.ibb.co/7StzrFv/Dise-o-sin-t-tulo.png" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item col">
                                <Link to="/Partner" className="nav-link">Colaboradoras</Link>
                            </li>
                            <li className="nav-item dropdown col">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crece
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="Tool" className="dropdown-item" >Herramientas</Link></li>
                                    <li><Link to="Ability" className="dropdown-item" >Habilidades</Link></li>
                                    <li><Link to="/" className="dropdown-item" >Tutorias</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown col ">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Conectate
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/Forum" className="dropdown-item" >Foros</Link></li>
                                    <li><Link to="/Event" className="dropdown-item" >Eventos</Link></li>
                                    <li><Link to="/News" className="dropdown-item" >Noticias</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item col col-lg-3 register">
                                <Link to="/" className="nav-link">Ser Socia</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { NavBar };