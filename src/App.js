import React, { Component } from 'react'; //importados da biblioteca react - default / named
import './App.css';
import Person from './Person/Person'; //.js pode ser omitido pois é incluído automaticamente
                                      //Componente importado com nome em letra maíscula pois letra miníscula é
                                      //reservado para elementos HMTL. 

//Componente principal
class App extends Component {
  render() { //importante sempre retornar um html para ser renderizado
    return (
      //Código JSX -> JS
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name="Name" age="21">I like: jabuti</Person>
        <Person name="Nime" age="25">I like: banana</Person>
        <Person name="Nome" age="29">I like: âmbar</Person>
      </div>
    )

    //Código JSX após ser compilado para ser renderizado
    //Estrutura: React.createElement(elemento a ser renderizado, configuração, elementos filho);
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

//exportando classe App para garantir acesso às classes que a importarão
export default App; 
