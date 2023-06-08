import React from "react"
import "./Card.css"

function Card ( props, otherClassName, toolStyle ) {
    return (
        <div className={`card_container ${otherClassName}`}
        >
                <h1 >{props.track}</h1>
              <img className="images"  />
            <h4 className={`${toolStyle}`}>{props.tools}</h4>
                <h4 className="h4">{props.role}</h4>
            
        </div>
    )
}

export default Card;
