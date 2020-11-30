import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import profil from "../../Assets/profile.png"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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
        </div>
    )
}

export default Post
