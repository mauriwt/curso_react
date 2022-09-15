/* Hook useState
Crear uno componente funcional y accerder al estado
privado a travez de un hook y modificar.
*/

import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Example = () => {

    const valorInicial = 0;
    const personaDefault = {
        name: 'Mauricio',
        email: 'jamertusa.m@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaDefault);

    function incrementarContador() {
        setContador(contador + 1);
    }
    function actualizarPersona() {
        setPersona(
            {
                name: 'Wilson',
                email: 'wilson@gmail.com'
            }
        );
    }
    return (
        <div>
            <h1>*** Example useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de Persona</h2>
            <h3>Nombre: {persona.name} </h3>
            <h4>Email: {persona.email} </h4>
            <button onClick={incrementarContador} > Contador ++</button>
            <button onClick={actualizarPersona} > Editar persona</button>
        </div>
    );
};

export default Example;
