import logo from './logo.svg';
import './App.css';
import Mensaje from './componentes/Mensaje';
import moment from 'moment';
import 'moment/locale/es';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='btn btn-primary'>Prueba React</button>
      </header>
      <div className="container my-3">
        <div className="jumbotron">
          <h1>Proyecto React JS</h1> 
          <hr />

          <div className="row">
            <div className="col-md-4">
              <Mensaje msj='Primer mensaje' color='red'></Mensaje>
            </div>
            <div className="col-md-4">
              <Mensaje msj='Segundo mensaje' color='blue'></Mensaje>
            </div>
            <div className="col-md-4">
              <Mensaje msj='Tercer mensaje' color='green'></Mensaje>
            </div>
          </div>

          <hr />
        </div>
      </div>

      {/* Dentro de las llaves: {} puedo escribir codigo Javascript, como este comentario o la funcion de abajo.*/}
      <div className='container-fluid align-items-end bg-dark'>
        <p className='text-white m-0'> { moment().format('[Proyecto ©]YYYY') }</p>
      </div>          
    </div>
  );
}

export default App;
