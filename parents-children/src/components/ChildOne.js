import React, { Component } from 'react'

class ChildOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChecked: true

        }
    }

    handleClick = () => {
        this.setState({
            isChecked = !this.props.isChecked
        })
    }

    render() {
        const { titre, btn, contenu } = this.props.data
        return (
            <div>
                <h1>{titre}</h1>
                {btn && (<button onClick={btn}>{contenu}</button>)}
                <input type="checkbox"></input>


            </div>
        )
    }
}

export default ChildOne
