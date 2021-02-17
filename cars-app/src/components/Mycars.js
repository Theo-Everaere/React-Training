import React, { Component, Fragment } from 'react'
import Car from './Cars'

class Mycars extends Component {
    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: '2000' },
            { name: 'Mercedes', color: 'black', year: '2010' },
            { name: 'Peugeot', color: 'green', year: '2018' }
        ]
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({ updatedState })
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <>
                <h1>{this.props.title}</h1>
                <button onClick={this.addTenYears}>+ 10 ans</button>

                <table className='carsTable'>
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>

                    {
                        this.state.voitures.map((voiture, index) => {
                            return (
                                <Fragment key={index} >
                                    <Car name={voiture.name} color={voiture.color} year={year - voiture.year + 'ans'} />
                                </Fragment>
                            )
                        })
                    }
                </table>
            </>
        )




    }
}
export default Mycars;
