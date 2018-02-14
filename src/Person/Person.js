import React from 'react'; //importando de reack package

const person = () => { //usando arrow function e colocando em uma constante
    return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
};

export default person; //exportando para usar em outro lugar