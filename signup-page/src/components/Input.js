import React, { Component } from 'react'

class Input extends Component {
    render() {
        const {onChange, placeholder, name, value, type} = this.props
        return (
            <div>
                <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
                
            </div>
        )
    }
}

export default Input
