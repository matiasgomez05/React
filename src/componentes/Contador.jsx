/* ----------------------------------------------------------------- */
/* Componente React basado en una clase (guarda estado -> statefull) */
/* Para mas facilidad utilizo la extension de Simple React Snippets: */
/* Ejemplos:                                                         */
/*  - imr (import react)                                             */
/*  - cc (create class)                                              */
/* ----------------------------------------------------------------- */
import React from 'react';
import './Contador.css';

class Contador extends React.Component {

    constructor(props){
        super(props)
        
        //Se puede asociar la funcion con el objeto en cuestion (bind) en caso de que no sea un callback (linea 45)
        //this.incrementar = this.incrementar.bind(this);
    }

    state = {
        contador: this.props.valor
    }

    incrementar(){
        this.setState({ contador: this.state.contador + 1 })
    }

    render(){

        let {id, fondo} = this.props            //Desestructurar props
        let contador = this.state.contador      //Desestructurar state

        return (

            <div className='Contador'>
                <div className='jumbotron bg-light text-dark' style={{ backgroundColor: fondo}}>
                    <h3>
                        Contador Nro. { id }
                    </h3>
                    <p>
                        Numero: { contador }
                    </p> 
                    {/* 
                    
                    Se puede llamar a la funcion sin callback, pero asociando la funcion con el objeto en cuestion (bind)
                    <button className='btn btn-secondary mb-3' onClick={ this.incrementar }> 

                    */}
                    <button className='btn btn-secondary mb-3' onClick={ () => this.incrementar() }>
                        Incrementar 
                    </button>
                </div>
            </div>
            
        )
    }

}

export default Contador

