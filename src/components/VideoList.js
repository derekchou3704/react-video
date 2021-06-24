import React from 'react'
import VideoItem from './VideoItem'

// Use ES6 syntax to extract only vodes from props
const VideoList = ({ videos }) => {
    const renderList = videos.map( video => {
        return <VideoItem video={video}/>
    })

    return(
        <div>{renderList}</div>
    )
}

export default VideoList