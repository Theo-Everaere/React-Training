import React, { Component } from 'react';
import frieza_img from '/Users/theo-/Desktop/GitHub/React-Training/tuto-donkey/src/img/Frieza.png';

class Frieza extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bg: ''
        }
    }

    handleClick = () => {
        this.setState({
            bg: 'bg-danger'
        })
    }

    render() {

        if (this.state.bg === "bg-danger") {
            throw new Error();
        }

        return (
            <div className={`col ${this.state.bg}`}>
                <img onClick={this.handleClick} className="frieza_img" src={frieza_img} /><br />
            </div>
        )
    }
}

export default Frieza;
