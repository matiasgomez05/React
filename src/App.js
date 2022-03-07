/* Librerias */

/* Estilos */
import './App.css';

/* Componentes */
import logo from './logo.svg';
import Mensaje from './componentes/Mensaje';
//Tambien se puede exportar como objeto, desestructurando, si no posee un export default:
//import { Mensaje } from './componentes/Mensaje';
import Contador from './componentes/Contador';
import Horario from './componentes/Horario';
import Año from './componentes/Año';
import Multiplicador from './componentes/Multiplicador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='btn btn-primary'>Prueba React</button>
      </header>
      <div className="container my-3">
        <div className="jumbotron">
          {/* TODO: Practicar con React: crear un componente que contenga titulo y mensaje (Cabecera.js) */}
          <h1>Proyecto React JS</h1> 
          <hr />
          <p>Nuevo proyecto con uso de React.JS</p>

          <div className="row">
            <div className="col-lg-4">
              <Mensaje msj='Primer mensaje' color='red'></Mensaje>
            </div>
            <div className="col-lg-4">
              <Mensaje msj='Segundo mensaje' color='blue'></Mensaje>
            </div>
            <div className="col-lg-4">
              <Mensaje msj='Tercer mensaje' color='green'></Mensaje>
            </div>
          </div>
          <hr />

        </div>
      </div>

      <Contador id="1" fondo="darkblue" valor={0}></Contador>
      <Multiplicador multiplicador={2}></Multiplicador>

      {/* Dentro de las llaves: {} puedo escribir codigo Javascript, como este comentario */}
      <div className='container-fluid align-items-end bg-dark'>
        <Horario></Horario>
        <Año></Año>
      </div>          
    </div>
  );
}

export default App;
