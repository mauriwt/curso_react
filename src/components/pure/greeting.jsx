import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 31
        }
    }


    render() {
        return (
            <div>
                <h1>
                    ¡Hola {this.props.name}!
                </h1>
                <h2>
                    Tu edad {this.state.age}:
                </h2>
                <div>
                    <button onClick={this.birthday}>Cumplir Años</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((preState) => (
            {
                age: preState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name:PropTypes.string,
};


export default Greeting;
