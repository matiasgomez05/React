import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

const añoActual = moment().format('YYYY');

function Año() {
    return (
      <div className='text-white'>
        <p className='text-white m-0'> Proyecto ©{ añoActual }</p>
      </div>
      
    );
    
}

export default Año; 