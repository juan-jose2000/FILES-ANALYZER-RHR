import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "../hooks/useForm/useForm";
import logo from '../../img/img-login.png';
import _ from "lodash";
import { toast } from 'react-toastify';
import { updateUser } from '../../redux/actions/userListAction';

const ChangePassword = () => {

    const dispatch = useDispatch();
    const user = useSelector( state => state.auth.user );

    const { _id } = user;

    const [ formValues, handleInputChange ] = useForm({
        newPassword:"",
        repeatPassword:"",
    });

    const [ error, setError ] = useState({
        mostrarError: false,
        textError: ""
    });

    const { newPassword, repeatPassword } = formValues;
    const { mostrarError, textError } = error; 

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { _id, password: newPassword, }
        console.log(data);

        if(_.isEmpty(newPassword) || _.isEmpty(repeatPassword)  ) {
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
                return  toast.error('Las contraseñas no coinciden', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                setError({
                    mostrarError: false,
                });
                dispatch(updateUser(data));
            }
        }
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
                    <input type="password" name="newPassword" value={ newPassword } onChange={handleInputChange} className="input-form" placeholder="Nueva contraseña" 
                        pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                        title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
                        required
                    />
                    <input type="password" name="repeatPassword" value={ repeatPassword } onChange={handleInputChange} className="input-form" placeholder="Repetir contraseña" 
                        pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                        title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
                        required
                    />

                    <button type="submit" className="button mt-3">Actualizar contraseña</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ChangePassword;