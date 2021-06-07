import React from 'react'
import './NameCard.css'

const nameCheapURL="https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard=(props) => {
    return (
        <a className="card-link" href={`${nameCheapURL}${props.name}`} target="_blank">
            <div className="name-card-container">
                <p className="name-card">{props.name}</p>
            </div>
        </a>
    )
}

export default NameCard;