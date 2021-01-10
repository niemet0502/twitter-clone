import React, { useEffect } from 'react'
import "./Message.css"
import MessageBox from "../MessageBox/MessageBox"


function Message() {

    useEffect(() => {
        
        const btn = document.querySelector(".clickme");
        btn.addEventListener('click', function(event){
            document.querySelector(".message").classList.toggle("message_height");
        })
        
        
    }, [])
    return (
        <div className="message">
            <div className="message_header">
                <div>
                     <h2>Message</h2>
                </div>
                <div className="message_header_container">
                    <div className="icon_container">
                    <div style={{fontSize: "25px", display: "block"}} dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path></g></svg></div>
                    </div>
                    <div className="icon_container clickme">
                     <div style={{fontSize: "25px", display: "block"}} dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z"></path><path d="M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z"></path></g></svg><span class="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"></span></div>
                    </div>
                </div>
            </div>
            <div className="message_content">
                <MessageBox 
                    image="https://pbs.twimg.com/profile_images/1334429774475898883/ByXBPhxk_400x400.jpg"
                    name="Gaak.fr"
                    displayname="@gaak_fr"
                    date="6 janv"
                    message="Hello Marius"
                />
                <MessageBox 
                    image="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                    name="React"
                    displayname="@reactjs"
                    date="25 dec"
                    message="React js content"
                />
                <MessageBox
                    image="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"
                    name="Laravel"
                    displayname="@laravelphp"
                    date="22 nov"
                    message="I'm Laravel a web artisans"
                />
                <MessageBox
                    image="https://pbs.twimg.com/profile_images/1095419255133270017/O5hGMSeF_400x400.jpg"
                    name="BuyCoins"
                    displayname="@buycoins_africa"
                    date="10 oct"
                    message="yes we are only avalable"
                />
                <MessageBox
                    image="https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg"
                    name="Dan Abramov"
                    displayname="@dan_abramov"
                    date="2 sep"
                    message="Hello I'm Dan"
                />
                <MessageBox
                    image=""
                    name=""
                    displayname=""
                    date=""
                    message=""
                />
            </div>
        </div>
    ) 
}

export default Message
