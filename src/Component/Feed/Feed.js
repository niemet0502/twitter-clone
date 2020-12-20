import React from 'react'
import "./Feed.css"
import TweetBox from "../TweetBox/TweetBox"
import Post from "../../Component/Post/Post"
function Feed() {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Accueil</h2>
                <div className="icon_container" style={{marginRight: "0px"}}>
                <svg viewBox="0 0 24 24" className="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g></svg>
                </div>
            </div>

            <TweetBox />

            <Post 
                avatar="https://pbs.twimg.com/profile_images/1340426458024521728/pRgyamV-_400x400.jpg"
                displayName="Ou Ki Shogun "
                username="alioune_kanoute"
                time="1h"
                text="20 minutes, je risque de faire du Eminem "
            />

            <Post 
                image="https://pbs.twimg.com/media/EpsShUAXUAM05OF?format=jpg&name=small"
                avatar="https://pbs.twimg.com/profile_images/1311271609546821632/HX-51tbt_400x400.jpg"
                text="Quand tu suit toutes les suggestions du client à la lettre"
                displayName="Galsen Dev "
                username="galsendev221"
                time="4h"
            />
            <Post
                image="https://pbs.twimg.com/media/EpSRHlMU0AEnNOi?format=jpg&name=small"
                avatar="https://pbs.twimg.com/profile_images/1340373451681480706/BcnsAl36_400x400.jpg"
                displayName="Japan"
                username="jxpann"
                time="14 dec"
                text="Neon japan"
            />
            <Post 
                image="https://pbs.twimg.com/media/EpRW8uIXEAYXvL5?format=jpg&name=small"
                avatar="https://pbs.twimg.com/profile_images/1334429774475898883/ByXBPhxk_400x400.jpg"
                displayName="Gaak"
                text="Le Saviez-vous ?! Le 15 Décembre est la journée mondiale des Otakus !"
                username="gaak_fr"
            />
        </div>
    )
}

export default Feed
