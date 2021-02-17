import React from 'react'

const Car = ({ name, color, year }) => {
    const colorInfo = color ? (`Couleur: ${color}`) : (`Couleur: ?`)

    if (name) {
        return (
            <tr>
                <td>Marque: {name}</td>
                <td>Age: {year}</td>
                <td>{colorInfo}</td>
            </tr>
        )

    } else {
        return null;
    }
}

export default Car;