import React from 'react'
import './VideoItem.css';
export const VideoItem = ({video,onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={()=> onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}
export default VideoItem;