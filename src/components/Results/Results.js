import React from 'react'
import NameCard from '../NameCard/NameCard'
import './Results.css'

const Results=(props) => {
    return (
        <div className="result-container">
            {props.suggestedNames.length > 0 && props.suggestedNames.map((sName) => {return <NameCard key={sName} name={sName}/>})}
        </div>
    )
}

export default Results;