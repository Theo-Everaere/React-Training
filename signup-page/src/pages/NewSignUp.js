import React, { Component } from 'react'
import FormTitles from '../components/FormTitles'
import Checkbox from '../components/Checkbox'

const initialState = {
    surname: '',
    surnameError: '',
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: ''
}

class NewSignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            initialState
        }
    }

    validate = () => {
        let surnameError = '';
        let nameError = '';
        let emailError = '';
        let passwordError = '';
        // let confirmPasswordError = '';

        if (!this.state.surname) {
            surnameError = "First name cannot be blank";
        }

        if (!this.state.name) {
            nameError = "Last name cannot be blank";
        }

        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }
        if (!this.state.password.includes('@')) {
            passwordError = 'Password must be 6 characters including at least one number, one uppercase and one special character';
        }

        if (emailError || surnameError || nameError || passwordError) {
            this.setState({ emailError, surnameError, nameError, passwordError });
            return false
        }

        return true

    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox ?
                event.target.checked : event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(initialState)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='profileContainer'>
                <FormTitles />
                <div className='profileIdentity'>
                    <div>
                        <input
                            name="surname"
                            placeholder='First name'
                            value={this.state.surname}
                            onChange={this.handleChange}

                        />
                        <div style={{ fontSize: 12, color: 'red' }}>{this.state.surnameError}</div>
                    </div>
                    <div>
                        <input
                            name="name"
                            placeholder='Last name'
                            value={this.state.name}
                            onChange={this.handleChange}

                        />
                        <div style={{ fontSize: 12, color: 'red' }}>{this.state.nameError}</div>
                    </div>
                </div>
                <div className='profileEmail'>
                    <input
                        name="email"
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
                </div>
                <div className='profilePassword'>
                    <div className='password'>
                        <input
                            type='password'
                            name="password"
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}

                        />
                        <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>
                    </div>
                    <div className='confirmPassword'>
                        <input
                            type='password'
                            name="password"
                            placeholder='Confirm password'
                            value={this.state.password}
                            onChange={this.handleChange}

                        />
                        <div style={{ fontSize: 12, color: 'red' }}>{this.state.passwordError}</div>
                    </div>
                </div>
                <Checkbox />
                <div className='button'>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        )
    }
}

export default NewSignUp
