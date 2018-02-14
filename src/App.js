import React, { Component } from 'react'; //importados da biblioteca react - default / named
import './App.css';

//Componente principal
class App extends Component {
  render() { //importante sempre retornar um html para ser renderizado
    return (
      //Código JSX -> JS
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
      </div>
    );

    //Código JSX após ser compilado para ser renderizado
    //Estrutura: React.createElement(elemento a ser renderizado, configuração, elementos filho);
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

//exportando classe App para garantir acesso às classes que a importarão
export default App; 
