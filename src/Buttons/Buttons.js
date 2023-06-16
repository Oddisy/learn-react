import React from "react"
import ButtonRoot from "../components/RootBotton/Button"
import "./Buttons.css";

const Buttons = () => {
    return (
        <div className="Button_App">
            <ButtonRoot
                otherClassName="frontend"
                text="frontend"
          onClick={() => console.log = "end"}
       

        />
          <ButtonRoot
                otherClassName="backend"
                text="backend"
        />
          <ButtonRoot
                otherClassName="webdesign"
                text="webdesign"
            />

              <ButtonRoot
                otherClassName="fullstack"
                text="fullstack"
            />
            </div>
    )
}
export default Buttons;