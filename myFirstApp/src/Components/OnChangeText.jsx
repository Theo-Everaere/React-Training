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
        const { str } = this.state
        return (
            <form>
                <input type="text" value={str} onChange={(text) => this.onChangeText(text)} />
                <input type="text" value={str} />
            </form>
        )
    }
}

export default OnChangeText;