import React, { useState } from "react"
import { useForm } from "../../hooks/useForm/useForm";
import logo from '../../../img/img-login.png';
import imgAtras from '../../../img/img-atras.png';
import { NavLink, useLocation } from 'react-router-dom'
import _ from "lodash";

export const RecoverPassword = (props) => {

    // let location = useLocation();
    // const ruta = location.pathname;

    // props.setCurrentPath(ruta);

    const [ formValues, handleInputChange ] = useForm({
        email:"",
    });

    const [ error, setError ] = useState({
        mostrarError: false,
    });

    const { email } = formValues;
    const { mostrarError } = error; 


    const handleSubmit = (e) => {
        e.preventDefault();

        if(_.isEmpty(email)) {
            setError({
                mostrarError: true,
            });
        } else {
            setError({
                mostrarError: false,
            });
        }
        
        console.log(formValues);
    }


    return (
        <section className="main-section-wrapper">
            <div className="content-wrapper recover-password">

                <NavLink className="nav-item nav-link" to="/login">
                    <img src={imgAtras} className="img-atras" />
                </NavLink>

                <div className="content">
                    <img src={logo} className="img-login" />
                    <h1 className="titulo text-uppercase">Reestablezca su <br/><b>Contraseña</b> </h1>

                    { 
                        (mostrarError === true ? <p className="error">Rellene el campo "email"</p> : <></>)
                    }

                    <form onSubmit={ handleSubmit }  className="login-form">
                        <input type="email" name="email" value={ email } onChange={handleInputChange} className="input-form" placeholder="email" />

                        <button type="submit" className="button mt-3">Enviar un email</button>
                    </form>
                </div>
            </div>
        </section>
    )
}