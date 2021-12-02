import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import imagen from '../../img/create-user.png';
import { createUser } from "../../redux/actions/userListAction";
import { useForm } from "../hooks/useForm/useForm";

export const CreateUser = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector( state => state.auth.user );

    const [ formValues, handleInputChange ] = useForm({
        name: "",
        last_father_name:"",
        last_mother_name: "",
        username: "",
        email: "",
        password: "",
        user_level: 1,
    });

    const { name, last_father_name, last_mother_name, username, email, password, user_level} = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues);
        const resultado = await dispatch(createUser(formValues));
        console.log(resultado);
        if(resultado === true) history.push("/user-list");
    }

    const GetLvels = () => {
        const levels = [];
        for( let i=1; i < user.user_level; i++  ) {
            levels.push(<option value={i}>Nivel {i}</option>);
        }
        return levels;
    }

    return(
        <section className="main-section-wrapper">
            <div className="content-wrapper create-user">
                <div className="content">

                    <img src={imagen} className="img-create-user" />

                    <h1 className="titulo text-uppercase"><b>REGISTRAR USUARIO</b> </h1>
                    <div className="line-blue"></div>

                    <p><b>CREAR NUEVO USUARIO</b></p>
                    <p className="subtexto">Es necesario llenar todo los campos</p>

                    <form noValidate className="login-form create-user-form">
                        <div className="container-input">
                            <input type="text" className="input-form" value={name} onChange={handleInputChange} name="name" placeholder="Nombres" 
                                pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                                title="Solo estan permitidos 3 a 20 caractere, solo letras" 
                                required
                                />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={last_father_name} onChange={handleInputChange} name="last_father_name" placeholder="Apellido Paterno" 
                            pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                            title="Solo estan permitidos 3 a 20 caractere, solo letras"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={last_mother_name} onChange={handleInputChange} name="last_mother_name" placeholder="Apellido Materno" 
                            pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                            title="Solo estan permitidos 3 a 20 caractere, solo letras"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={username} onChange={handleInputChange} name="username" placeholder="Nombre de usuario" 
                            pattern="[a-zA-Z0-9]{3,20}" 
                            title="Solo estan permitidos 6 a 10 caractere, letras y numeros"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="email" className="input-form" value={email} onChange={handleInputChange} name="email" placeholder="Correo electronico" 
                            pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                            title="Formato de email valido: example@example.com"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="password" className="input-form" value={password} onChange={handleInputChange} name="password" placeholder="Contraseña"
                                pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
                                title="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
                                required
                            />
                        </div>
                        <div className="container-input">
                            <select className="input-form" value={user_level} onChange={handleInputChange} name="user_level" pattern="[1-3]{1}" required >
                                <GetLvels />
                            </select>
                        </div>
                       

                        <br/>

                        <div className="div-button">
                            <button type="submit" onClick={handleSubmit} className="button mt-3">Registrar</button>
                        </div> 
                    </form>


                </div>
            </div>
        </section>
    );
}