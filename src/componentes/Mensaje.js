import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import './Mensaje.css';

/* ------------------------------------------------------------ */
/* Componente React basado en una funcion (No guarda estado)
/* ------------------------------------------------------------ */

//La funcion tiene el mismo nombre que el archivo:
function Mensaje(props){
    //console.log(props.msj);

    const {color, msj} = props;

    return(
        <div className="Mensaje">
            <div className="jumbotron py-2" style={{ backgroundColor: color}}>
                <h3>{ msj }</h3>
                <p>{ moment().format('[Publicado el dia: ] LL') }</p>
            </div>
        </div>
    )
}

export default Mensaje;