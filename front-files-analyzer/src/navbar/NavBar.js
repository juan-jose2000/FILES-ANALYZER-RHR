import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/recover-password">Recuperar contraseña</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create-user">Crear usuario</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
                </div>
            </div>
            </nav>
    );
}