import React from 'react'

function PlanCard({ id, name, price }) {
    return (
        <div className="plan__card" key={id}>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default PlanCard
