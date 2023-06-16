import React from "react"
import "./Button.css"

const  RootButton =  ({text, onClick, otherClassName, button_style  }) => {
    return (
        <div >
            <button className={`Button_Style ${otherClassName}`}
                onClick={onClick}> {text} </button>
            
            </div>
    )
}


export default RootButton;

