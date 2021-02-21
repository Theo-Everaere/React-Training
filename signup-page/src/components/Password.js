import React, { Component } from 'react'

class Password extends Component {
    render() {
        return (
            <div className='passwordSection'>

                <div className='profilePassword'>
                    <input type='password' placeholder='Password' required></input>
                </div>
                <div className='profileConfirmPassword'>
                    <input type='password' placeholder='Confirm Password' required></input>
                </div>
            </div>

        )
    }
}

export default Password
