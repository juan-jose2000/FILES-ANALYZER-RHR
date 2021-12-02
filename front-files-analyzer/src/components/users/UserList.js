import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers, updateUser } from "../../redux/actions/userListAction";

export const UserList = () => {

    const dispatch = useDispatch();
    
    const getAllPersons = useSelector( state => state.user.persons.data );

    //Obtener listado de todos los usuarios
    useEffect(()=> {
        dispatch(getAllUsers());
     },[]);

    const handleDelete = async (id) => {
        dispatch(deleteUser(id));
    }

    const users = getAllPersons.map((user, idx) => (
        <tr key={idx}>
            <td>{user.name}</td>
            <td>{user.last_father_name }</td>
            <td>{user.last_mother_name}</td>
            <td>{user.email}</td>
            <td>{user.user_level}</td>
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
                        <li><a className="dropdown-item" onClick={() => handleDelete(user._id)} >Eliminar</a></li>
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
                            <table className="table table-hover align-middle table-borderless">
                                <thead>
                                    <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido P.</th>
                                    <th scope="col">Apellido M.</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Nivel</th>
                                    <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users 
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
        </section>
    );
}

