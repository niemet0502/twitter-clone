import React from 'react'
import "./Feed.css"
import TweetBox from "../TweetBox/TweetBox"
function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            

        </div>
    )
}

export default Feed
