import React from 'react';

const Data = ({ country, cases, recovered, deaths }) => {
    return (
        <div className="data">
            <h1>{ country }</h1>
            <ul>
                <li>Total Cases: { cases }</li>
                <li>Total Recovered: { recovered }</li>
                <li>Total Deaths: { deaths }</li>
            </ul>

        </div>
    )
}

export default Data;