import React from 'react';

const Data = ({ country, cases, recovered, deaths }) => {
    return (
        <div className="data">
            <h1>{ country }</h1>
            <ul>
                <li>{ cases }</li>
                <li>{ recovered }</li>
                <li>{ deaths }</li>
            </ul>

        </div>
    )
}