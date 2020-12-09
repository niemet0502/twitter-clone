import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed,TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';
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
               
            </div>
        </div>
    )
}

export default Widgets
