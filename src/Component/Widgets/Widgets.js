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
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1333537026944217088"} />
            </div>
        </div>
    )
}

export default Widgets
