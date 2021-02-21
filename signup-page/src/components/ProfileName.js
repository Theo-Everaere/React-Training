import React, { Component } from 'react'

function Field({ name, value, onChange, children }) {
    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                placeholder={children}
                minLength="2"
                required />
        </div>
    )
}

class ProfileName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: ''
        }
    }

    handleChangeFirst = (text) => {
        const firstName = text.target.value
        this.setState({
            first: text.target.value

        })
    }
    handleChangeLast = (text) => {
        const lastName = text.target.value
        this.setState({
            last: text.target.value

        })
    }


    render() {

        return (
            <div className='profileName'>
                <Field name='firstName' value={this.state.first} onChange={this.handleChangeFirst}>First Name</Field>
                <Field name='lastName' value={this.state.last} onChange={this.handleChangeLast}>Last Name</Field>

            </div >

        )
    }
}

export default ProfileName
