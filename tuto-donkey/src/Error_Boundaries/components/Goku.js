import React, { Component } from 'react';
import goku_img from '/Users/theo-/Desktop/GitHub/React-Training/tuto-donkey/src/img/Goku.png';

class Goku extends Component {


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
                <img onClick={this.handleClick} className="goku_img" src={goku_img} /><br />

            </div>
        )
    }
}

export default Goku;
