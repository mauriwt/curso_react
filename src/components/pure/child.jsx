import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    const pressButton = () => {
        const text = messageRef.current.value;
        alert('Test in input ' + text);
    }
    const pressButtonParams = (text) => {
        alert(`Text: ${text}`)
    }


    const submitName = (e) => {
        e.preventDefault();
        update(nameRef.current.value);
    }
    return (
        <div style={{ background: 'grey', padding: '30px' }}>
            <p onMouseOver={() => console.log('Mouse over')}>Child Component, Hi {name}</p>
            <button onClick={() => console.log('Botón 1 Pulsado')}>Butón 1</button>
            <button onClick={pressButton}>Butón 2</button>
            <button onClick={() => pressButtonParams('Hello')}>Butón 3</button>
            <input placeholder='Insert a text'
                onFocus={() => console.log('Input on focus')}
                onChange={(e) => console.log('On change', e.target.value)}
                onCopy={() => console.log('On copy')}
                ref={messageRef}></input>
            <button onClick={() => send(messageRef.current.value)}> send message</button>

            <div style={{ marginTop: '20px' }}></div>
            <form onSubmit={submitName}>
                <input placeholder='New Name' ref={nameRef}></input>
                <button type='submit'>Update</button>
            </form>
        </div>
    );
}

export default Child;
