import React from 'react'
import './Cards.css'
import CardRoot from "../components/RootCard/Card"

const Cards = () => {
    return (
        <div  className="card_container" >
            <div>
                <CardRoot
                    track="Frontend"
                    role="Building ui for client"
                    tools="html, css, JavaScript, react"
                    otherClassName="cardy"
                    TrackColor="FrontendColor"
                    toolStyle="tools_color"
          />
                <CardRoot
                    track="Web Design"
                    tools="Adope, figma, Behance"
                      role="Building ui for Developers"
                
                />
            </div>
            
            <div>
           
                <CardRoot
                    track="Backend"
                    tools="php, node js, python"
                      role="Building Database "
                />
                <CardRoot
                    track="FullStack"
                    tools="html, css, JavaScript, react, node Js"
                      role="Can work as a frontend or Backend Developer"
                />
                </div>
            </div>
    )
}

export default Cards;
 