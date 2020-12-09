import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import profil from "../../Assets/profile.png"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={profil} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>Marius NIEMET {" "}
                            <span> <VerifiedUserIcon /> </span> </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Twitter Clone by Marius</p>
                    </div>
                </div>
                <img src="https://i.pinimg.com/564x/67/32/31/673231d0fecd5ba8b4be1678a3d732cf.jpg" alt=""/>
            </div>
            <div className="post_footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>
    )
}

export default Post