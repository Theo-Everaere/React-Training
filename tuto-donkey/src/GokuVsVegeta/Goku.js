import React, { Component } from 'react'
import Goku_img from "../img/Goku.png"
import countHits from './countHits'

class Goku extends Component {


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
                    className="goku_img"
                    src={Goku_img}
                    alt="Goku" /><br />
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

export default countHits(Goku, 20);