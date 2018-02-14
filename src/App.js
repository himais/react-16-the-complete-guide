import React, { Component } from 'react'; //importados da biblioteca react - default / named
import './App.css';
import Person from './Person/Person'; //.js pode ser omitido pois é incluído automaticamente
                                      //Componente importado com nome em letra maíscula pois letra miníscula é
                                      //reservado para elementos HMTL. 

//Componente principal
class App extends Component {

  /*State: funciona apenas em classes que extendem de Component (não funciona em funções)
  - Manipulado apenas dentro do componente
  - Pode ser alterado: ao alterar o valor do estado, o componente será renderizado  */
  state = {
    persons: [
      {name: 'Maíra', age: 20},
      {name: 'Vincius', age: 22},
      {name: 'Tartaruga', age: 100}
    ]
  } 

  render() { //importante sempre retornar um html para ser renderizado
    return (
      //Código JSX -> JS
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I like: jabuti</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like: banana</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like: âmbar</Person>
      </div>
    )

    /*Código JSX após ser compilado para ser renderizado
    Estrutura: React.createElement(elemento a ser renderizado, configuração, elementos filho); */
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

//exportando classe App para garantir acesso às classes que a importarão
export default App; 
