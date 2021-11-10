import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export const UserList = () => {
    return (
        <section className="main-section-wrapper without-padding-top">
            <div className="content-wrapper">
                <div className="content">
                        <h1>Lista de usuarios</h1>

                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido P.</th>
                                    <th scope="col">Apellido M.</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Tipo de usuario</th>
                                    <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Juan José</td>
                                        <td>Hernandez</td>
                                        <td>Palma</td>
                                        <td>juanpalma22</td>
                                        <td>Nivel 3</td>
                                        <td>
                                        <div class="dropdown">
                                            <FontAwesomeIcon icon={faEllipsisV} data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">ver</a></li>
                                                <li><a class="dropdown-item" href="#">Editar</a></li>
                                                <li><a class="dropdown-item" href="#">Eliminar</a></li>
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
                                        <div class="dropdown">
                                            <FontAwesomeIcon icon={faEllipsisV} data-bs-toggle="dropdown" aria-expanded="false" />
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">ver</a></li>
                                                <li><a class="dropdown-item" href="#">Editar</a></li>
                                                <li><a class="dropdown-item" href="#">Eliminar</a></li>
                                            </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </section>
    );
}

