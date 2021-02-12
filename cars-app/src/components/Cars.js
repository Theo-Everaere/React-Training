import React from 'react'

const Car = ({ children, color, year }) => {
    const colorInfo = color ? (<p>Couleur: {color}</p>) : (<p>Couleur: ?</p>)

    if (children) {
        return (
            <div style={{ backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>Marque: {children} </p>
                <p>Année: {year} </p>
                {colorInfo}
            </div>
        )

    } else {
        return null;
    }
}

export default Car;