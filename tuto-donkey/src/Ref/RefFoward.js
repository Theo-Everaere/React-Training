import React, { Component } from 'react'
import MyRef from './MyRef'

class RefForward extends Component {

    constructor(props) {
        super(props)

        this.refComp = React.createRef();
    }

    handleClick = () => {
        this.refComp.current.focus()

    }



    render() {
        console.log('App', this.refComp)
        return (
            <div className='App'>
                <MyRef name="Toto" ref={this.refComp} />
                <button onClick={this.handleClick}>Valider</button>
            </div>
        );
    }
}

export default RefForward;
