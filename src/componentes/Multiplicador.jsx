import React, {Fragment, useState} from 'react';
import P from './P';

/*
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
            <button onClick={multiplicar}>
                Multiplicar
            </button>

            <P />
        </Fragment>
    );
}
 
export default Multiplicador;