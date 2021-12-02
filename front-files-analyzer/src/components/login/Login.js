import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm/useForm';
import logo from '../../img/img-login.png';
import _ from "lodash";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { userLogin } from '../../redux/actions/userAction';
import { userLoginBegin, userLoginSuccess } from '../../redux/actions/userAction';
import jwt_decode from 'jwt-decode';

export const Login = (props) => {


    // let location = useLocation();
    // const ruta = location.pathname;

    // props.setCurrentPath(ruta);

    // const dispatch = useDispatch();
    const dispatch = useDispatch();


    const [ formValues, handleInputChange ] = useForm({
        username:"",
        password:"",
    });

    const [ error, setError ] = useState({
        mostrarError: false,
    });

    const { username, password, } = formValues;
    const { mostrarError } = error; 

    const handleSubmit = async (e) => {
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


        try {

            dispatch(userLoginBegin());

            const {data} = await axios({
                method: 'post',
                url: 'http://[::1]:3000/users/login',
                data: {
                    email: username,
                    password,
                }
            })  
            
            console.log(data.token);
            const decoded = jwt_decode(data.token);
            console.log(decoded);

            dispatch(userLoginSuccess({token: data.token, user: decoded}))



            props.history.push(`/home`);

        } catch(error) {
            return error;
        }
    
        // console.log(props);
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

// Login.propTypes = {
//     isAuthenticated: PropTypes.any,
//     history: PropTypes.any,
//     role: PropTypes.any,
//     dispatch: PropTypes.any,
//     userLoginSuccess: PropTypes.any,
//     userLogin: PropTypes.any,
// };


// function mapStateToProps (state) {
//     return {
//         isAuthenticated: state.user.isAuthenticated,
//         // role: state.user.role.lenght > 0 ? state.user.role.length : 'empleado'
//         role: state.user.role,
//         error: state.user.error
//     };
// }

// const mapDispatchToProps = dispatch => ({
//     userLoginSuccess: params => dispatch(userLoginSuccess(params)),
//     userLogin: params => dispatch(userLogin(params)),
// });

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));