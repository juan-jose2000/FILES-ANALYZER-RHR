import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "../../redux/actions/userAction";

export const NavBar = () =>{

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLogout());
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container-fluid">
            <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Nuestro logo</NavLink>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Inicio</NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/user-list">usuarios</NavLink>
                </div>
                <div className="">
                   
                </div>
                <div className="navbar-nav ms-auto">
                    {/* <form >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Juan Jose
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><NavLink className="dropdown-item" to="/change-password">Cambiar contraseña</NavLink></li>
                            <li onClick={logout} >
                            <NavLink className="dropdown-item" to="/">Cerrar sesión</NavLink>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
     
        </div>
    </nav>


        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item active">
        //             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Link</a>
        //         </li>
        //         <li className="nav-item dropdown">
        //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Dropdown
        //             </a>
        //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        //                 <li><a className="dropdown-item" href="#">Action</a></li>
        //                 <li><a className="dropdown-item" href="#">Another action</a></li>
        //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
        //             </ul>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //         </li>
        //         </ul>
        //     </div>
        // </nav> 
    );
}