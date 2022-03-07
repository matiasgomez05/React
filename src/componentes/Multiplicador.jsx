import React, {Fragment, useState} from 'react';
import P from './P';

/*
* Practica de Fragment: El elemento Fragment me permite traer otro elemento previamente creado (<P /> en este caso)
* Practica de Hooks: useState siempre debe contener un valor para inicializar la variable
*/
const Multiplicador = () => {

    const [multiplicador, setMultiplicador] = useState(1);

    const multiplicar = () => {
        setMultiplicador(multiplicador * 2);
    }

    return (
        <Fragment>
            <h1>
                { multiplicador }
            </h1>
            <button className='btn btn-secondary' onClick={ multiplicar }>
                Multiplicar x2
            </button>

            <P />
        </Fragment>
    );
}
 
export default Multiplicador;