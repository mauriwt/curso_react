import React, {useRef, useEffect, useState} from 'react';

/**
 * 
 * Use, useState, useRef, useEffect
 */

const Example2 = () => {
const [contA, setContA] = useState(0);
const [contB, setContB] = useState(0);

// Referencia para asociar una variable con un elemento del DOM

const miref = useRef();

function incrementarContA() {
    setContA(contA + 1);
}

function incrementarContB() {
    setContB(contB + 1);
}

 // useEffect
 // Caso 1 ejecutar siempre un snnippet de código

/* useEffect(() => {
    console.log('Cambio de estado componente');
    console.log('Mostar Ref a elemto del DOM');
    console.log(miref)
});*/

// useEffect
 // Caso 2 ejecutar solo cuando cambie el contador A

 /*useEffect(() => {
    console.log('Cambio de estado contador A');
    console.log('Mostar Ref a elemto del DOM');
    console.log(miref)
 }, [contA]);*/

 // useEffect
 // Caso 2 ejecutar solo cuando cambie el contador A o contador B

 useEffect(() => {
    console.log('Cambio de estado contador A');
    console.log('Mostar Ref a elemto del DOM');
    console.log(miref)
 }, [contA, contB]);

return (
    <div>
        <h1>*** Example useState(), useRef(), useEffect() ***</h1>
        <h2>Contador A: {contA}</h2>
        <h2>Contador B: {contB}</h2>
        <h2>Datos de Persona</h2>

        <h4 ref={miref}>Ejemplo de elemento Ref </h4>
        <button onClick={incrementarContA} > Contador A</button>
        <button onClick={incrementarContB} > Contador B</button>
    </div>
);

}

export default Example2;
