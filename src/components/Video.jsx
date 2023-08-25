import React from "react";
import "./Video.css"
const Video = ()=>{
    return (
        <div className="video">
            <video 
                src="https://www.youtube.com/watch?v=0CX0t6gpcLw&t=26s"
                className="video_player"
                loop
            >

            </video>
        </div>
    )
}
export default Video