import React from 'react'
import "./TweetBox.css"
import profil from "../../Assets/profile.png"
import { Avatar, Button } from '@material-ui/core'
function TweetBox() {
    return (
        <div className="TweetBox">
            <form action="">
                <div className="TweetBox_input">
                    <Avatar src={profil} />
                    <input type="text" placeholder="Quoi de neuf ? "/>
                    
                </div>
               
                <Button className="TweetBox_TweetButton">TWEET</Button>
            </form>
        </div>
    )
}

export default TweetBox
