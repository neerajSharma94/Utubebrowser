import React from 'react';
import SingleVideo from './SingleVideo';



const VideosList = (props) => {

    const videos = props.videos;
    return (
        <div className='video-list'>
            {
                videos.map(video => {
                    return (<SingleVideo key={video.id.videoId} video={video} onSelectedVideo={props.onSelectedVideo} />)
                })
            }
        </div>
    )
}



export default VideosList;