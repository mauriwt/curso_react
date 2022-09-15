import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento ante de que el componente desaparesca');
    }

    render() {
        return (
            <div>
                <h1>DidMound</h1>
            </div>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log('Comportamiento ante de que el componente desaparesca');
        };
    },[]);

    return (
        <div>
            <h1>WillUnMound</h1>
        </div>
    );
}
