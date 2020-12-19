import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import profil from "../../Assets/profile.png"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({displayName, username, verified, text, image, avatar, time}) {
    return (
        <div className="post">
                <div className="post_avatar">
                    <img className="Suggestion_image" src="https://pbs.twimg.com/profile_images/1325577759033339905/w2UOSqKh_400x400.jpg" />
                </div>
            <div style={{border: "1px solid red"}}>
                <div className="post_body">
                        <div className="post_header">
                            <div className="post_headerText">
                              <div>
                                <h3  className="suggestion_name"> マリウス {" "}
                                <span> <VerifiedUserIcon /> </span> </h3>
                                <h5 className="Suggestion_pseudo">@mariusniemet05</h5>
                                <h6 className="Suggestion_pseudo">· 12 déc.</h6>
                              </div>
                              <div>
                                <MoreHorizIcon />
                              </div>
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
        </div>
    )
}

export default Post
