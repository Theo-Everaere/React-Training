import React, { Component } from 'react'
import FormTitles from '../components/FormTitles'
import ProfileName from '../components/ProfileName'
import Password from '../components/Password'
import ProfileEmail from '../components/ProfileEmail'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

class SignUpPage extends Component {
    render() {
        return (
            <form className='profileContainer'>
                <FormTitles />
                <div className='userData'>
                    <ProfileName />
                    <ProfileEmail />
                    <Password />
                    <Checkbox />
                    <Button />
                </div>
            </form >
        )
    }
}

export default SignUpPage
