import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Spiderman'
        }

    }
    

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps -- Lancée', 'color: red; background: yellow; font-size : 15 px ')
        console.log(props);
        console.log(state);
        return null;
    }

    render() {
        return (
            <div>
                <p>Nom: {this.state.nom} </p>
                <p>Age: {this.props.age} </p>
            </div>
        )
    }
}

export default MyComponent;

