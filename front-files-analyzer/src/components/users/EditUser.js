import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import imagen from '../../img/create-user.png';
import imgAtras from '../../img/img-atras.png';
import { updateUser } from '../../redux/actions/userListAction';
import { useForm } from '../hooks/useForm/useForm';


const EditUser = (props) => {

    const dispatch = useDispatch();
    const id = props.match.params.id;
    const getOneUser = useSelector( state => state.user.persons.data );
    const user = getOneUser.find(element => element?._id === id)
    const { action } = useParams();

    const [ formValues, handleInputChange ] = useForm({
        name: user?.name,
        last_father_name: user?.last_father_name,
        last_mother_name: user.last_mother_name,
        username: user?.username,
        email: user?.email,
    });

    const { name, last_father_name, last_mother_name, username, email } = formValues;

    const disabled = action === "details";
    const title = ( action === "details" ) ? "DETALLES" : "EDITAR USUARIO";
    const subtitle = ( action === "details" ) ? "INFORMACIÓN DE USUARIO" : "ACTUALIZAR INFORMACIÓN DE USUARIO";

    const ButtonHidden = ({ action }) => {
        if (action === "details") {
            return <></>;
        }
        return (
            <div className="div-button">
                <button type="submit" className="button mt-3">Guardar cambios</button>
            </div> 
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...formValues, _id: id }
        console.log(data)
        dispatch(updateUser(data));
    }
    
    return(
        <section className="main-section-wrapper change-password without-padding-top">
                <NavLink to="/user-list">
                    <img src={ imgAtras } className="img-atras" />
                </NavLink>

            <div className="content-wrapper create-user">
                <div className="content">


                    <img src={imagen} className="img-create-user" />

                    <h1 className="titulo text-uppercase"><b>{title}</b> </h1>
                    <div className="line-blue"></div>

                    <p><b>{ subtitle }</b></p>

                    {
                        ( action === "update" ) ? 
                            <p className="subtexto">Es necesario llenar todo los campos</p>
                        :
                        <></>
                    }
 
                    <form className="login-form create-user-form"  onSubmit={ handleSubmit }>
                    <div className="container-input">
                            <input type="text" className="input-form" value={name} onChange={handleInputChange} disabled={disabled} name="name" placeholder="Nombres" 
                                pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                                title="Solo estan permitidos 3 a 20 caractere, solo letras" 
                                required
                                />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={last_father_name} onChange={handleInputChange} disabled={disabled} name="last_father_name" placeholder="Apellido Paterno" 
                            pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                            title="Solo estan permitidos 3 a 20 caractere, solo letras"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={last_mother_name} onChange={handleInputChange} disabled={disabled} name="last_mother_name" placeholder="Apellido Materno" 
                            pattern="[a-zA-ZÁ-ÿ ]{3,20}" 
                            title="Solo estan permitidos 3 a 20 caractere, solo letras"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" value={username} onChange={handleInputChange} disabled={disabled} name="username" placeholder="Nombre de usuario" 
                            pattern="[a-zA-Z0-9]{3,20}" 
                            title="Solo estan permitidos 6 a 10 caractere, letras y numeros"
                            required
                            />
                        </div>
                        <div className="container-input">
                            <input type="email" className="input-form" value={email} onChange={handleInputChange} disabled={disabled} name="email" placeholder="Correo electronico" 
                            pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                            title="Formato de email valido: example@example.com"
                            required
                            />
                        </div>
                        <br/>

                        <ButtonHidden action={ action } />
                       
                    </form>


                </div>
            </div>
        </section>
    );
};

export default EditUser;