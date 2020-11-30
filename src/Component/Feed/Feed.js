import React from 'react'
import "./Feed.css"
import TweetBox from "../TweetBox/TweetBox"
import Post from "../../Component/Post/Post"
function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post />

        </div>
    )
}

export default Feed
