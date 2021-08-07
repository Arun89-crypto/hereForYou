import React from 'react'

function PlanCard({ id, name, price }) {
    return (
        <div className="plan__card" key={id}>
            <h1>{name}</h1>
            {
                (name === '4 sessions combo' || name === '8 sessions combo' || name === 'Personality Assessment' || name === 'IQ Assignment') ? (
                    <div className="popular__tag">Most Popular ⭐</div>
                ) : ''
            }
            <p>{price}</p>
        </div>
    )
}

export default PlanCard
