import logo from './logo.svg';
import './App.css';
import Mensaje from './componentes/Mensaje';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='btn btn-primary'>Prueba React</button>
      </header>
      <div className="container mt-3">
        <div className="jumbotron">
          <h1>Proyecto React JS</h1> 
          <hr />

          <div className="row">
            <div className="col-4">
              <Mensaje msj='Primer mensaje'></Mensaje>
            </div>
            <div className="col-4">
              <Mensaje msj='Segundo mensaje'></Mensaje>
            </div>
            <div className="col-4">
              <Mensaje msj='Tercer mensaje'></Mensaje>
            </div>
          </div>        
        </div>
      </div>      
    </div>
  );
}

export default App;
