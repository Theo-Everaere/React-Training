import React, { Component } from 'react'
import Vegeta_img from "../img/Vegeta.png"
import countHits from './countHits'

class Vegeta extends Component {


    render() {

        const { name, addOneHit, higherOrderComponentState, life } = this.props
        const lifeValue = life > 0 ?
            (<td>{life} %</td>) :
            (<td><span className="badge badge-danger">Mort</span></td>);

        const button = life > 0 ?
            (<button
                className="btn btn-success m-3"
                onClick={addOneHit}
            >{name} frappe</button>) :
            (<button
                className="btn btn-danger m-3"
                disabled
            >{name} est mort</button>);

        return (
            <div className="col">
                <img
                    className="vegeta_img"
                    src={Vegeta_img}
                    alt="Vegeta" /><br />

                {button}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>Coups</th>
                            <th scope='col'>Vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{higherOrderComponentState.hits}</td>
                            {lifeValue}
                        </tr>

                    </tbody>
                </table>

            </div>
        )
    }
}

export default countHits(Vegeta, 10);