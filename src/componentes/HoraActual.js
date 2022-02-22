import React from 'react';

function HoraActual() {
    return (
      <div className='HoraActual text-white'>
        <h2>Son las {new Date().toLocaleTimeString()}.</h2>
      </div>
      
    );
    
}

export default HoraActual;