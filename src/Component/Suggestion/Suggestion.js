import React from 'react'
import "./Suggestion.css"
import { Button } from "@material-ui/core"
function Suggestion({image, name, pseudo}) {
    return (
        <div className="Suggestion">
            <img  className="Suggestion_image" src={image}  />
            <div className="Suggestion_container"  >
                <h3 className="suggestion_name">{name}</h3>
                <h6 className="Suggestion_pseudo"> @{pseudo} </h6>
            </div>
            <Button className="Suggestion_button">Suivre</Button>
        </div>
    )
}

export default Suggestion
