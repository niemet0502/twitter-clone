import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import Suggestion from "../Suggestion/Suggestion"
function Widgets() {
    return (
        <div className="Widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input type="text" placeholder="Search Twitter" name="" id=""/>
            </div>
            <div className="widgets_widgetContainer">
                <h2>Tendances pour vous </h2>
                <hr style={{width: "95%"}} />
            </div>
            <div className="widgets_widgetContainer">
                <h2>Suggestions</h2>
                <hr style={{width: "95%"}} />
                <Suggestion name="マヌー" pseudo="manusquall" />
            </div>
        </div>
    )
}

export default Widgets
