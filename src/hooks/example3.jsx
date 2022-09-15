// Hooks, useState(), useContext()

import React, { useContext, useState } from 'react';


/**
 *
 *
 * @return {*} 
 */
 const miConexto = React.createContext(null);
const Component1 = () => {
    const state = useContext(miConexto);
    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/* */}
            <Component2></Component2>
        </div>
    );
}


const Component2 = () => {
    const state = useContext(miConexto);
    return (
        <div>
            <h1>
                La sesión es: {state.session}
            </h1>
        </div>
    );
}

export default function MiComponentContext() {
    const estadoInicial = {
        token: '1234567',
        session: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);
    function actualizarSesion() {
        setSessionData({
            token: 'JWT9876543',
            session: sessionData.session + 1
        });
    }

    return (
        <miConexto.Provider value= {sessionData}>
            <Component1></Component1>
            <button onClick={actualizarSesion}>Actualizar session</button>
        </miConexto.Provider>
    );
}


