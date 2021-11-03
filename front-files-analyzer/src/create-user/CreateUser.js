import React from "react";
import imagen from '../img/create-user.png';

export const CreateUser = () => {

    return(
        <section className="main-section-wrapper">
            <div className="content-wrapper create-user">
                <div className="content">

                    <img src={imagen} className="img-create-user" />

                    <h1 className="titulo text-uppercase"><b>REGISTRAR USUARIO</b> </h1>
                    <div className="line-blue"></div>

                    <p><b>CREAR NUEVO USUARIO</b></p>
                    <p className="subtexto">Es necesario llenar todo los campos</p>

                    <form className="login-form create-user-form">
                        <div className="container-input">
                            <input type="text" className="input-form" name="name" placeholder="Nombres"/>
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" name="aPaterno" placeholder="Apellido Paterno"/>
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" name="aMaterno" placeholder="Apellido Materno"/>
                        </div>
                        <div className="container-input">
                            <input type="text" className="input-form" name="username" placeholder="Nombre de usuario"/>
                        </div>
                        <div className="container-input">
                            <input type="email" className="input-form" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="container-input">
                            <input type="password" className="input-form" name="password" placeholder="Contraseña"/>
                        </div>
                        <div className="container-input">
                            <input type="password" className="input-form" name="validatePassword" placeholder="Validar contraseña"/>
                        </div>
                        <div className="container-input">
                            <select className="input-form">
                                <option value="value1" selected>Tipo de usuario</option>
                                <option value="value1">Nivel 1</option>
                                <option value="value2" >Nivel 2</option>
                                <option value="value3">Nivel 3</option>
                            </select>
                        </div>
                       

                        <br/>

                        <div className="div-button">
                            <button type="submit" className="button mt-3">Registrar</button>
                        </div> 
                    </form>


                </div>
            </div>
        </section>
    );
}