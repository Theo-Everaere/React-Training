import React, { Component } from 'react'
import ReactLoading from 'react-loading';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = { loader: false }
    }

    handleClick = () => {
        this.setState({ loader: true })
        setTimeout(() => { this.setState({ loader: false }) }, 3000)
    }

    render() {
        const { loader } = this.state
        return (
            <div>
                {loader ? "" : <button onClick={this.handleClick}>Affichez le loader</button>}
                {loader ? <ReactLoading type="bubbles" color="blue" /> : " "}
            </div>

        )
    }
}
export default Loader;

