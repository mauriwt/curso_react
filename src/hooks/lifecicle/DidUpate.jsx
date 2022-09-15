import React, { Component, useEffect } from 'react';

export class DidUpate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevo props o cambios en su estado');
    }

    render() {
        return (
            <div>
                <h1>DidUpate</h1>
            </div>
        );
    }
}

export const DidUpateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevo props o cambios en su estado');
    });

    return (
        <div>
            <h1>DidUpate</h1>
        </div>
    );
}
