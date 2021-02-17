import React, { Component } from 'react'


class OnChangeText extends Component {

    constructor(props) {
        super(props);
        this.state = { str: '' }
    }

    onChangeText = (text) => {
        this.setState({ str: text.currentTarget.value })

    }
    render() {
        return (
            <form>
                <input type="text" name="name" value={this.state.str} onChange={(text) => this.onChangeText(text)} />
                <input type="text" name="name" value={this.state.str} />
            </form>
        )
    }
}

export default OnChangeText;