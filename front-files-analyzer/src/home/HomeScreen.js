import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const HomeScreen = () =>{
    return (
        <section className="main-section-wrapper without-padding-top">
            <div className="content-wrapper home">
                <div className="content">

                    <div className="header-home" >
                        <div>
                            <input type="text" name="search" placeholder="buscar" />
                        </div>
                        <div>
                            <input type="file" name="file" />
                        </div>
                        <div>
                            <NavLink to="/create-user">
                                <i className="icon-plus">
                                    <FontAwesomeIcon icon={faPlus} className="icon"/>
                                </i>
                            </NavLink>
                            <NavLink to="/create-user">
                                <p className="text-uppercase">agregar usuario</p> 
                            </NavLink>
                            
                        </div>
                    </div>
                    <h1>Home screen</h1>

                </div>
            </div>
        </section>
    );
}
