import React from 'react'

function Suggestion({image, name, pseudo}) {
    return (
        <div className="Suggestion">
            <img src="" alt="" className="Suggestion_image"/>
            <div className="Suggestion_container">
                <h3 className="suggestion_name"></h3>
                <h6 className="Suggestion_pseudo"></h6>
            </div>
            <button className="Suggestion_button">Suivre</button>
        </div>
    )
}

export default Suggestion
