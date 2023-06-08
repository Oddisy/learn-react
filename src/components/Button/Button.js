import React from "react"
import "./Button.css"

function Button ({text, onClick, otherClassName}){
    return (
        <div className="Button_Container">
            <button className={`button_style ${otherClassName}`} onClick={onClick}> {text}</button>
            </div>
    )
}


export default Button

