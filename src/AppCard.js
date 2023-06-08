import React from 'react'
import './AppCard.css'
import Card from "./components/card/Card"

export default function App() {
    return (
        <div>
            <div className="card_container row_one">
                <Card
                    track="Frontend"
                    role="Building ui for client"
                    tools="html, css, JavaScript, react"
                    otherClassName="cardy"
                    TrackColor="FrontendColor"
                    toolStyle="tools_color"
          />
                <Card
                    track="Web Design"
                    tools="Adope, figma, Behance"
                      role="Building ui for Developers"
                
                />
            </div>
            
            <div className="card_container row_two">
           
                <Card
                    track="Backend"
                    tools="php, node js, python"
                      role="Building Database "
                />
                <Card
                    track="FullStack"
                    tools="html, css, JavaScript, react, node Js"
                      role="Can work as a frontend or Backend Developer"
                />
                </div>
            </div>
    )
}

 