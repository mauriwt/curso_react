// uso de props.children
import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>*** children props ***</h1>
            <h2> Name: {props.name} </h2>
            {props.children}
        </div>
    );
}

export default Example4;
