import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getAllUsers, getOneUser, getAllUsersBegin, getAllUsersFailure, getAllUsersSuccess, getOneUserBegin, getOneUserFailure, getOneUserSuccess } from "../../redux/actions/userListAction";

export const UserList = () => {

    const dispatch = useDispatch();

    const getAllPersons = useSelector( state => state.user.persons.data );

    //Obtener listado de todos los usuarios
    useEffect(()=> {
        dispatch(getAllUsers());
     },[]);


    
    // const handleSubmit = async (e) => {

    //     e.preventDefault();
    //     const id = e.target.dataset.id;

    //     userId(id);
    //     // dispatch(userId(id));
    //     // dispatch(getOneUser(id))
    // }

    const users = getAllPersons.map((user, idx) => (
        <tr key={idx}>
            {/* <td>{user._id}</td> */}
            <td>{user.name}</td>
            <td>{user.last_father_name }</td>
            <td>{user.last_mother_name}</td>
            <td>{user.email}</td>
            <td>{user.user_level}</td>
            {/* <td>{user.user_type}</td> */}
            <td>
                <div className="dropdown">
                    <FontAwesomeIcon icon={faEllipsisH} className={"icon-dropdown" } data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link className="dropdown-item" data-id={user._id} to={`/user/form/${user._id}/details`}>Ver</Link>
                        </li>
                        <li key={ user.name } >
                            <Link className="dropdown-item" data-id={user._id} to={`/user/form/${user._id}/update`}>Editar</Link>
                        </li>
                        <li><a className="dropdown-item" href="#">Eliminar</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    ));

    return (
        <section className="main-section-wrapper without-padding-top user-list">
            <div className="content-wrapper">
                <div className="content">
                        <h1 className="titulo text-uppercase"><b>Listado de usuarios</b></h1>

                        {/* <div className="table-responsive"> */}
                            <table className="table table-hover align-middle table-borderless">
                                <thead>
                                    <tr>
                                    {/* <th scope="col">Id</th> */}
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido P.</th>
                                    <th scope="col">Apellido M.</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Nivel</th>
                                    {/* <th scope="col">Tipo de usuario</th> */}
                                    <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        users   
                                    }
{/* 
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Juan José</td>
                                        <td>Hernandez</td>
                                        <td>Palma</td>
                                        <td>juanpalma22</td>
                                        <td>Nivel 3</td>
                                        <td>
                                        <div className="dropdown">
                                            <FontAwesomeIcon icon={faEllipsisV} data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">ver</a></li>
                                                <li><a className="dropdown-item" href="#">Editar</a></li>
                                                <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                            </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Juan José</td>
                                        <td>Hernandez</td>
                                        <td>Palma</td>
                                        <td>juanpalma22</td>
                                        <td>Nivel 3</td>
                                        <td>
                                        <div className="dropdown">
                                            <FontAwesomeIcon icon={faEllipsisV} data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">ver</a></li>
                                                <li><a className="dropdown-item" href="#">Editar</a></li>
                                                <li><a className="dropdown-item" href="#">Eliminar</a></li>
                                            </ul>
                                            </div>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                </div>
            {/* </div> */}
        </section>
    );
}

