import React, { Component } from 'react'


class DisabledButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDisabled: true
        }
    }

    handleClick = () => {
        this.setState({ isDisabled: !this.state.isDisabled })
        setTimeout(() => { this.setState({ isDisabled: true }) }, 3000)
    }

    render() {
        const { isDisabled } = this.state
        return (
            <div className="App" >
                <button onClick={this.handleClick} disabled={!isDisabled}>A</button>
                <button onClick={this.handleClick} disabled={isDisabled}>B</button>
            </div>
        );
    }
}

export default DisabledButton;