import React, { Component, useEffect } from 'react';

export class Didmount extends Component {
    componentDidMount() {
        console.log('Comportamiento antes que el componente sea añada al DOM');
    }

    reder() {
        return (
            <div>
                <h1>DidMound</h1>
            </div>
        );
    }
}

export const DidMoundHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes que el componente sea añada al DOM');

    }, []);

    return (
        <div>
            <h1>DidMound</h1>
        </div>
    );
}

