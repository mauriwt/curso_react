import React, { useState } from 'react';

//Estilo logeado
const loggedStyle = {
    color: 'white'
};

//Estilo no logeado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
};

const GreetingStyled = (props) => {
// craer estado

const [logged, setLogged] = useState(false);

const greetingUser = () => (<p>Hola, { props.name }</p>);
const pleaseLogin = () => (<p>Login please</p>);

    return (
        <div style={logged ? loggedStyle: unloggedStyle}>

            {logged ? greetingUser()
            :  pleaseLogin()         
            }
            
            <button onClick={ ()=>{
                console.log("Botón click");
                setLogged(!logged);
            }}>
                {logged ? 'Logout': 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
