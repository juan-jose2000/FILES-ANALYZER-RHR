import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh, faChartBar, faFilePdf, faFileWord, faFileAlt, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { getOneFile, getOneFileAnalyze } from '../../redux/actions/fileAction';
import _, { forEach, sample } from 'lodash';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Pdf } from '../pdf/Pdf';
import {BarChart} from '../graph/Graph';
import { VerticalBarChart } from '../graph/VerticalBarChart';


const FileDetail = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const [ acomodo, setAcomodo ] = useState({
        grafica: false,
    })
    
    useEffect( async () => {
        await dispatch( getOneFile(id) );
        await dispatch( getOneFileAnalyze(id) );
    },[]);

    // Algo asi va a ser la logica de busqueda
    const file = useSelector( state => state.file.oneFile );
    const fileAnalyzer = useSelector( state => state.file.fileAnalyze );

    const labelsPie = ["Numero de lineas", "numero de parrafos", "numero de palabras"] ;
    const dataGraphPie = [fileAnalyzer?.lines_number, fileAnalyzer?.paragraphs_number, fileAnalyzer?.words_number];


    const labelsGraphBar = [];
    const dataGraphBar = [];
    // console.log(fileAnalyzer?.dictionary.length);

    const obj = fileAnalyzer?.dictionary;

    if(obj) {
        Object.entries(obj).forEach(([key, value]) => {
            labelsGraphBar.push(key);
            if(_.isNumber(value)) {
              dataGraphBar.push(value);
            } else {
                dataGraphBar.push(1);
            }
        })
    }

    const { grafica } = acomodo;

    const handlePositionList = () => {
        setAcomodo({
            grafica: !grafica
        })
    }

    const iconGraphPie = <i className="icon-inicio" data-bs-toggle="tooltip" data-bs-placement="left" title="Grafica pastel"><FontAwesomeIcon icon={faChartPie} className="icon icon-list"/></i>;
    const iconGrapChar = <i className="icon-inicio" data-bs-toggle="tooltip" data-bs-placement="left" title="Grafica de barras"><FontAwesomeIcon icon={faChartBar} className="icon"/></i>;
    const iconPdf = <i className="icon-plus"><FontAwesomeIcon icon={faFilePdf} className="icon icon-pdf"/></i>;        
    const iconWord = <i className="icon-plus"><FontAwesomeIcon icon={faFileWord} className="icon icon-word"/></i>;        
    const iconTxt = <i className="icon-plus"><FontAwesomeIcon icon={faFileAlt} className="icon icon-txt"/></i>;        
    

    if(loading === true) { 
        return <div><h1>Loading...</h1></div>
    }

    

    return (
        <section className="main-section-wrapper without-padding-top file-detail">
            <div className="content-wrapper">
                <div className="content">
                    <table className="table table-hover align-middle table-borderless mt-5">
                        <thead className="">
                            <tr>
                                <th>
                                    Nombre
                                </th>
                                <th>
                                    Propietario
                                </th>
                                <th>
                                    Fecha de creación
                                </th>
                                <th>
                                    Nivel de acceso
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{ 
                                ( file?.mimetype === "application/pdf" ) ?
                                iconPdf : ( file?.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ) ? iconWord : 
                                ( file?.mimetype === "text/plain" ) ? iconTxt  : null
                                }
                                {" "}
                                {
                                    file?.name
                                }
                            </td>
                            <td>{file?.user?.username}</td>
                            <td>{file?.created_at}</td>
                            <td>{file?.access_level}</td>
                        </tr>
                        </tbody>
                    </table>
        
                        <div className="container-icon-mode">
                            <div className="icon-vista" onClick={ handlePositionList }>
                                { ( grafica === true ) ? iconGraphPie : iconGrapChar}
                            </div>
                        </div>
                    
                    <div style={{width:'100%'}}>
                        {
                            (grafica === true) ? <VerticalBarChart labels={labelsGraphBar} data={dataGraphBar} /> : <BarChart labels={labelsPie} data={dataGraphPie}/>  
                        }
                    </div>

                    <p>

                    </p>
                </div>
            </div>
        </section>
    );
};

export default FileDetail;