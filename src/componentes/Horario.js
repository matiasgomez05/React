import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

const horaActual = moment().format('HH:mm')

function Horario() {
    return (
      <div className='text-white'>
        <h2>Son las { horaActual }</h2>
      </div>
      
    );
    
}

export default Horario; 