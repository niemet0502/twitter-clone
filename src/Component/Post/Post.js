import React from 'react'
import "./Post.css"
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
                    <img className="Suggestion_image" src={avatar} />
                </div>
            <div>
                <div className="post_body">
                        <div className="post_header">
                            <div className="post_headerText">
                              <div>
                                <h3  className="suggestion_name"> {displayName} {" "}
                                <span> <VerifiedUserIcon className="post_badge" /> </span> </h3>
                                <h5 className="Suggestion_pseudo">@{username}</h5>
                                <h6 className="Suggestion_pseudo">· {time}.</h6>
                              </div>
                              <div>
                                <MoreHorizIcon />
                              </div>
                            </div>
                            <div className="post_headerDescription">
                                <p>{text}</p>
                            </div>
                        </div>
                        <img src={image} alt=""/>
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
