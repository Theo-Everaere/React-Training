import React, { Component } from 'react'

class Checkbox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: false
        }
    }

    handleChange = (event) => {
        this.setState({
            checked: event.target.checked
        })

    }


    render() {
        return (

            <div className='profileCondition'>
                <input
                    type='checkbox'
                    checked={this.state.checked}
                    onChange={this.handleChange}
                ></input>
                <p>I accept the <a href='#'>terms and conditions</a></p>
            </div>

        )
    }
}

export default Checkbox
