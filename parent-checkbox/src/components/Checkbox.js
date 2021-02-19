import React, { Component } from 'react'

class Checkbox extends Component {

    handleClick = () => {
        this.props.parentCallBack()
    }

    render() {

        return (
            <div>
                <input type='checkbox' onClick={this.handleClick}></input>
            </div>
        )
    }
}

export default Checkbox;