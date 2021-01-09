import React from 'react'
import "./MessageBox.css"
function MessageBox({image, name, displayname, date, message}) {
    return (
        <div className="MessageBox">
            <img src="https://pbs.twimg.com/profile_images/1341855731486760967/0Q-YCn8r_400x400.jpg" width="23px" alt="" className="Suggestion_image"/>
            <div className="MessageBox_content">
               <div className="MessageBox_content_header">
                   <div className="MessageBox_content_header_title">
                       <h1 className="suggestion_name">Marius NIEMET</h1> &nbsp;
                       <h3 className="Suggestion_pseudo">@mariusniemet05</h3>
                   </div>
                    <h5>8 janv.</h5>
               </div>

              <p>
                Message Message  
              </p>
            </div>
        </div>
    )
}

export default MessageBox
