import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExchangeAlt, faList, faTh, faFilePdf, faFileWord, faFileAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useHistory } from "react-router-dom";
import { createFile, deleteFile, getAllFiles } from "../../redux/actions/fileAction";
import _ from 'lodash';
import moment from 'moment';
import jwt_decode from "jwt-decode";

export const HomeScreen = () =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector( state => state.auth.user );
    const level = user.user_level;

    const [ pagination, setPagination ] = useState(10);

    const [ acomodo, setAcomodo ] = useState({
        list: true,
    })

    const [ archivo, setArchivo ] = useState({
        nombreArchivo: "",
        formData: "",
    })

    const [ find, setFind ] = useState({
        buscando: ""
    }) 
    
    const file = useSelector( state => state.file );
    const filesData = file.files.data;

    useEffect(() => {
        dispatch(getAllFiles());
    },[]);

    const { list } = acomodo;
    const { nombreArchivo, formData } = archivo; 
    const { buscando } = find;

    const handlePositionList = () => {
        setAcomodo({
            list: !list
        })
    }

    const handlePagination = (a) => {
        console.log(a.target.value);
    }

    const handleInputFile = (a) => {
        const formData = new FormData();
        formData.set("files", a.target.files[0]);
        setArchivo({
            nombreArchivo: a.target.files[0].name,
            formData
        })
    }

    const uploadFile = async () => {
        if(!_.isEmpty(nombreArchivo)) {
            const resultado = await dispatch(createFile(formData));
            if(resultado === true) {
                setArchivo({
                    nombreArchivo: "",
                    formData: ""
                })
            }
        }
    }

    const handleFinder = (data) => {
        setFind({
            buscando: data.target.value
        });
    }

    const handleDelete = (id) => {
        dispatch(deleteFile(id));
    }

    const renderNombreArchivo = <p>{ nombreArchivo }</p>;


    const finder = filesData.filter((element) => (
        element.name.includes(buscando) ||
        element.userId.includes(buscando) ||
        element.size.includes(buscando) 
    ));

    const iconList = <i className="icon-inicio" data-bs-toggle="tooltip" data-bs-placement="left" title="vista lista"><FontAwesomeIcon icon={faList} className="icon icon-list"/></i>;
    const iconListCuadro = <i className="icon-inicio" data-bs-toggle="tooltip" data-bs-placement="left" title="vista cuadro"><FontAwesomeIcon icon={faTh} className="icon"/></i>;
    const iconPdf = <i className="icon-plus"><FontAwesomeIcon icon={faFilePdf} className="icon icon-pdf"/></i>;        
    const iconWord = <i className="icon-plus"><FontAwesomeIcon icon={faFileWord} className="icon icon-word"/></i>;        
    const iconTxt = <i className="icon-plus"><FontAwesomeIcon icon={faFileAlt} className="icon icon-txt"/></i>;        
    

    const iteratorFiles = finder.map((element, idx) => {
        if(!element?.user ) {
            return <h1>Cargando...</h1>
        }
        const dateCreatedAt = moment(element.created_at).local().format('DD-MM-YYYY HH:mm:ss');
        return (
            <tr>
                <td></td>
                <td>{ 
                    ( element.mimetype === "application/pdf" ) ?
                    iconPdf : ( element.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ) ? iconWord : 
                    ( element.mimetype === "text/plain" ) ? iconTxt  : null
                }
                {" "}
                {
                    element.name
                }
                </td>
                <td>{ element.user.username }</td>
                <td>{ dateCreatedAt }</td>
   
                <td>{ element.access_level }</td>
                <td className="text-center">
                    <div className="dropdown">
                        <FontAwesomeIcon icon={faEllipsisH} className={"icon-dropdown" } data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" to={`/file/${element._id}`}>Ver</Link></li>
                            <li><a className="dropdown-item" onClick={() => handleDelete(element._id)} >Eliminar</a></li>
                            <li><a className="dropdown-item" href={`http://localhost:3000/files/${element._id}/download`} download={element.name} target="_blank">Descargar</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        )
    });

    const vistaLista = (
        <table className="table table-hover align-middle table-borderless">
            <thead className="">
                <tr>
                    <th>
                        <div class="form-check form-switch" data-bs-toggle="tooltip" data-bs-placement="left" title="ver registros eliminados">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </th>
                    <th>
                        Nombre
                        <FontAwesomeIcon icon={faExchangeAlt} className={"icon-exchange" } />
                    </th>
                    <th>
                        Propietario
                        <FontAwesomeIcon icon={faExchangeAlt} className={"icon-exchange" } />    
                    </th>
                    <th>
                        Fecha de creación
                        <FontAwesomeIcon icon={faExchangeAlt} className={"icon-exchange" } />
                    </th>
                    <th>
                        Nivel de acceso
                        <FontAwesomeIcon icon={faExchangeAlt} className={"icon-exchange" } />
                    </th>
                    <th className="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
               {iteratorFiles}
            </tbody>
        </table>
    ) 


    const iteratorFilesCuadro = finder.map((element, idx) => {
        if(!element?.user ) {
            return <h1>Cargando...</h1>
        }
        const dateCreatedAt = moment(element.created_at).local().format('DD-MM-YYYY HH:mm:ss');
        return (
            <>
                <div className="archivo">
                    <div className="subcontainer">
                        { 
                            ( element.mimetype === "application/pdf" ) ?
                            iconPdf : ( element.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ) ? iconWord : 
                            ( element.mimetype === "text/plain" ) ? iconTxt  : null
                        }
                        {" "}
                        {
                            element.name
                        }
                    </div>
                    <div className="subcontainer">
                        Propietario: { element.user.username }
                    </div>
                    <div className="subcontainer">
                        Fecha de creación: {dateCreatedAt}
                    </div>
                    <div className="subcontainer botones">
                        <div>
                            <button className="input-form bg-white" onClick={ () => history.push(`/file/${element._id}`) }>Ver</button>
                        </div>
                        <div>
                            {/* <button className="input-form bg-white"> */}
                                <a className="btn py-2 color-blue input-form bg-white" href={`http://localhost:3000/files/${element._id}/download`} download={element.name} target="_blank">Descargar</a>
                                {/* Descargar */}
                            {/* </button>  */}
                        </div>
                        <div>
                            <button className="input-form bg-white" onClick={() => handleDelete(element._id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    });

    const vistaCuadro = (
        <div>
            <div className="body-square">
                {iteratorFilesCuadro}
            </div>
        </div>
    )


    return (
        <section className="main-section-wrapper without-padding-top">
            <div className="content-wrapper home">
                <div className="content">

                    <div className="header-home" >
                        <div>
                            <input type="text" className="input-form" name="search" placeholder="Buscar..." onChange={ handleFinder } />
                        </div>
                        <div className="files"> 
                            <div className="container-inputs-files">
                                <input onChange={ handleInputFile } type="file" name="file" className="input-file" />
                                <button className="seleccionar-archivo">
                                    Seleccionar archivo de mi dispositivo
                                </button>
                                { ( nombreArchivo !== "" ) ? renderNombreArchivo : null }
                            </div>
                            <button onClick={uploadFile} className="input-form">Subir archivo</button>
                        </div>
                        <div>
                            { ( level > 1 ) ? <>
                                <NavLink to="/create-user">
                                <i className="icon-plus">
                                    <FontAwesomeIcon icon={faPlus} className="icon"/>
                                </i>
                                </NavLink>
                                <NavLink to="/create-user">
                                    <p className="text-uppercase">agregar usuario</p> 
                                </NavLink> </> : <></>
                            }                        
                        </div>
                    </div>
                    
                    <div className="list-files">

                            <div className=" icon-vista " onClick={ handlePositionList }>
                                { ( list === true ) ? iconListCuadro : iconList }
                            </div>
                            { 
                                ( list === true ) ? vistaLista : vistaCuadro
                            }
                    </div>
                    <div className="pagination">
                        <p>Total de elementos: { file.files.count }</p>
                        <select 
                            className="input-form"
                            onChange={ handlePagination }
                            >
                            <option selected value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}
