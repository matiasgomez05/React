import React from 'react';
import './Mensaje.css';

/* ------------------------------------------------------------ */
/* Componente React basado en una funcion (No guarda estado)
/* ------------------------------------------------------------ */

//La funcion tiene el mismo nombre que el archivo:
function Mensaje(props){

    return(
        <div className="Mensaje">
            <div className="jumbotron">
                <h3>{ props.msj }</h3>
            </div>
        </div>
    )
}

export default Mensaje;