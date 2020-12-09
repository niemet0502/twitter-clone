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
                <Suggestion image="https://pbs.twimg.com/profile_images/1334292218471993345/wYvD5acG_400x400.jpg" name="マヌー" pseudo="manusquall" />
                <hr style={{width: "95%"}} />
                <Suggestion image="https://pbs.twimg.com/profile_images/1317271501180207106/OaM5L8yq_400x400.jpg" name="ᴅᴀᴏᴏᴅᴀ." pseudo="daoodaba975" />
                <hr style={{width: "95%"}} />
                <Suggestion image="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" name="Exba Jr" pseudo="jr_exba" />
                <hr style={{width: "95%"}} />
                <a href="#!" className="widgets_widgetContainer_link">Voir plus</a>
            </div>
        </div>
    )
}

export default Widgets
