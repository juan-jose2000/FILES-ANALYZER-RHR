import React from 'react'
import logo from '../img/img-login.png';

export const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("hola");

        console.log("hola21131");
        console.log("asnknda");

    }

    return (
        <section className="main-section-wrapper">
            <div className="content-wrapper login">
                <div className="content">
                    <img src={logo} className="img-login" />

                    <h1 className="titulo text-uppercase">Accesar <br/>al <b>sistema</b> </h1>

                    <form onSubmit={handleLogin} className="login-form">
                        <input type="text" className="input-form" name="username" id="username" placeholder="Usuario"/>
                        <input type="text" className="input-form" name="password" id="password" placeholder="Contraseña"/>

                        <button type="submit" className="button mt-3">Ingresar</button>
                    </form>
                    <button type="button" className="btn btn-link mt-3">Olvide mi contraseña</button>

                </div>
            </div>
        </section>
    )
}