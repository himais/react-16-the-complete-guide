import React, { Component } from 'react'; //importados da biblioteca react - default / named
import './App.css';

//Componente principal
class App extends Component {
  render() { //importante sempre retornar um html para ser renderizado
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
      </div>
    );
  }
}

//exportando classe App para garantir acesso às classes que a importarão
export default App; 
