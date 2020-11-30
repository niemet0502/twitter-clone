import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from "../SidebarOption/SidebarOption"
import { Button } from "@material-ui/core"
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="Sidebar">
            <TwitterIcon className="Sidebar_twitterIcon" />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption  Icon={SearchIcon} text="Explore" />
            <SidebarOption  Icon={NotificationsNoneIcon} text="Notification" />
            <SidebarOption  Icon={MailOutlineIcon} text="Message" />
            <SidebarOption  Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption  Icon={ListAltIcon} text="List" />
            <SidebarOption  Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption  Icon={MoreHorizIcon} text="More" />

            <Button  variant="outlined" className="Sidebar_tweet" fullWidth>
                Tweeter
            </Button>
        </div>
    )
}

export default Sidebar
