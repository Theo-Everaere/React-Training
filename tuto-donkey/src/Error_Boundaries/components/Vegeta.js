import React, { Component } from 'react';

import vegeta_img from '/Users/theo-/Desktop/GitHub/React-Training/tuto-donkey/src/img/Vegeta.png';

class Vegeta extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bg: ''
        }
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-success'
        })
    }

    render() {
        return (
            <div className={`col ${this.state.bg}`}>
                <img className="vegeta_img" src={vegeta_img} onClick={this.handleClick} /><br />

            </div>
        )
    }
}

export default Vegeta;
