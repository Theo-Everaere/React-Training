import React from 'react'
import { useHistory } from "react-router-dom";

export default function Projet() {
    const history = useHistory();
    return (
        <>
            <h1>Projet</h1>
            <button onClick={() => history.push('/')}>GO TO ROOT</button>
        </>
    )
}
