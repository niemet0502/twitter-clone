import React from 'react'
import "./MessageBox.css"
function MessageBox({image, name, displayname, date, message}) {
    return (
        <div className="MessageBox">
            <img src={image} width="23px" alt="" className="Suggestion_image"/>
            <div className="MessageBox_content">
               <div className="MessageBox_content_header">
                   <div className="MessageBox_content_header_title">
                       <h1 className="suggestion_name"> {name} </h1> &nbsp;
                       <h3 className="Suggestion_pseudo"> {displayname}</h3>
                   </div>
                    <h5>{date}.</h5>
               </div>

              <p>
               {message}
              </p>
            </div>
        </div>
    )
}

export default MessageBox
