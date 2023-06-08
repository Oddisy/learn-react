import React from "react"
import "./AppButton.css"
import Button from "./components/Button/Button"
import App from "./AppCard"

const AppButton = () => {
    const frontendBackGround = document.querySelector('.cardy')
    return (
        <div className="Button_App">
            <Button
                otherClassName="frontend"
                text="frontend"
                onClick={() => frontendBackGround.style.backgroundColor = "white"  }
        />
          <Button
                otherClassName="backend"
                text="backend"
        />
          <Button
                otherClassName="webdesign"
                text="webdesign"
            />

              <Button
                otherClassName="fullstack"
                text="fullstack"
            />
            </div>
    )
}
export default AppButton