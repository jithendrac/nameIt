import React from 'react'
import './Header.css'

const Header=(props) => {
    return (
        <div className="head-container">
            <img className={props.expanded?"head-img head-img-expanded":"head-img-contracted" }
            alt="Image" src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" />
            <h1 className={props.expanded?"head-text head-text-expanded":"head-text-contracted"}>{props.headerText}</h1>
        </div>
    )
}

export default Header;