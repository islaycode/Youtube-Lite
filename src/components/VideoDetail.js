import React from 'react'

export const VideoDetail = ({video}) => {
    if(!video){
        return <div></div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
        <div className="ui embed">
            <iframe src={videoSrc} title="videoPlayer"/>
        </div>
        <div className="ui segment">
           <h4 className="ui header">{video.snippet.title}</h4>
           <hr/>
            <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail;