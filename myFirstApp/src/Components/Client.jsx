import React, { Component } from 'react';

class Client extends Component {
    render() {
        const details = this.props.details
        const onDelete = this.props.onDelete
        return (
            <div>
            <ul>
                <li>
                    {details.nom}{" "}
                    <button onClick={() => onDelete(details.id)}> x </button>
                </li >
            </ul>
            </div>
        )
    }
}
export default Client;