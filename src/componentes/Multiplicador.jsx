import React, {Fragment, useState} from 'react';
import P from './P';

const Multiplicador = () => {

    const [multiplicador, setMultiplicador] = useState(0);

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