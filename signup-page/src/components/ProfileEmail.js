import React, { Component } from 'react'

export class ProfileEmail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            emailError: ''

        }
    }

    validate = () => {
        let emailError = '';
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
        }
    }

    render() {
        return (
            <div className='profileEmail' onSubmit={this.handleSubmit}>
                <input type='email' placeholder='Email' required></input>
                <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
            </div>
        )
    }
}

export default ProfileEmail
