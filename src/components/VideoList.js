import React from 'react'
import VideoItem from './VideoItem'

// Use ES6 syntax to extract only vodes from props
const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map( video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>
    })

    return(
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList