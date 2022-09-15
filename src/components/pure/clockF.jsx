import React, { useEffect, useState } from 'react';

const ClockF = () => {

    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Mauricio',
        apellidos: 'Tituaña'
    }

    const [persona, setPersona] = useState(initialData);

    const updateData = () => {
        let edad = persona.edad +1;
        setPersona(
             {
               ...persona,
               fecha: new Date(),
               edad
            });
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateData()
        }, 1000);
        return () => {
            clearInterval(intervalID);
        };
    });


    return (
        <div>
        <h2>
        Hora Actual:
        {persona.fecha.toLocaleTimeString()}
        </h2>
        <h3>{persona.nombre} {persona.apellidos}</h3>
        <h1>Edad: {persona.edad}</h1>
        </div>
    );
}

export default ClockF;
