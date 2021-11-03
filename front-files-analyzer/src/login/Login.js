import React, { useState, } from 'react';
import { useForm } from '../hooks/useForm/useForm';
import logo from '../img/img-login.png';
import _ from "lodash";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


export const Login = (props) => {


    let location = useLocation();
    const ruta = location.pathname;

    props.setCurrentPath(ruta);

    const [ formValues, handleInputChange ] = useForm({
        username:"",
        password:"",
    });

    const [ error, setError ] = useState({
        mostrarError: false,
    });

    const { username, password, } = formValues;
    const { mostrarError } = error; 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(_.isEmpty(username)||_.isEmpty(password)) {
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
            <div className="content-wrapper login">
                <div className="content">
                    <img src={logo} className="img-login" />

                    <h1 className="titulo text-uppercase">Accesar <br/>al <b>sistema</b> </h1>
                    

                    { 
                        (mostrarError === true ? <p className="error">Rellene todos los campos</p> : <></>)
                    }

                    <form onSubmit={ handleSubmit } className="login-form">
                        <input type="text" className="input-form" name="username" value={ username } onChange={handleInputChange} placeholder="Usuario"/>
                        <input type="password" className="input-form" name="password" value={ password }  onChange={handleInputChange} placeholder="Contraseña"/>

                        <button type="submit" className="button mt-3">Ingresar</button>
                    </form>

                    <NavLink className="btn btn-link mt-3" to="/recover-password" >Olvide mi contraseña</NavLink>
                    {/* <button type="button" className="btn btn-link mt-3">Olvide mi contraseña</button> */}

                </div>
            </div>
        </section>
    )
}