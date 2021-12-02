import React, { useState } from 'react';
import { useForm } from "../hooks/useForm/useForm";
import logo from '../../img/img-login.png';
import _ from "lodash";

const ChangePassword = () => {

    const [ formValues, handleInputChange ] = useForm({
        currentPassword:"",
        newPassword:"",
        repeatPassword:"",
    });

    const [ error, setError ] = useState({
        mostrarError: false,
        textError: ""
    });

    const { currentPassword, newPassword, repeatPassword } = formValues;
    const { mostrarError, textError } = error; 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(_.isEmpty(currentPassword) || _.isEmpty(newPassword) || _.isEmpty(repeatPassword)  ) {
            setError({
                mostrarError: true,
                textError: "Rellene todos los campos",
            });
        } else {
            if(newPassword !== repeatPassword) {
                setError({
                    mostrarError: true,
                    textError: "Las contraseñas no coinciden",
                });
            } else {
                setError({
                    mostrarError: false,
                });
            }
        }
        
        console.log(formValues);
    }



    return (
        <section className="main-section-wrapper without-padding-top">
        <div className="content-wrapper recover-password">

            <div className="content">
                <img src={logo} className="img-login" />
                <h1 className="titulo text-uppercase">Cambiar <br/><b>Contraseña</b> </h1>

                { 
                    (mostrarError === true ? <p className="error">{ textError }</p> : <></>)
                }

                <form onSubmit={ handleSubmit }  className="login-form">
                    <input type="password" name="currentPassword" value={ currentPassword } onChange={handleInputChange} className="input-form" placeholder="Contraseña actual" />
                    <input type="password" name="newPassword" value={ newPassword } onChange={handleInputChange} className="input-form" placeholder="Nueva contraseña" />
                    <input type="password" name="repeatPassword" value={ repeatPassword } onChange={handleInputChange} className="input-form" placeholder="Repetir contraseña" />

                    <button type="submit" className="button mt-3">Enviar un email</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ChangePassword;