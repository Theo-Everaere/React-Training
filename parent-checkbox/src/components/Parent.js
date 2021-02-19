import React, { Component } from 'react'
import Checkbox from './Checkbox'

class Parent extends Component {
    state = {
        isDisabled: true

    }


    callBackFunction = (ChildData) => {
        this.setState({
            isDisabled: ChildData
        })
    }

    render() {
        return (
            <div className="App">

                <Checkbox parentCallBack={this.callBackFunction} />

                <button>Not Available</button>

            </div>
        );
    }
}

export default Parent;
