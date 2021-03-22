import React from 'react';
import '../css/searchbar.css'

class SingleVideo extends React.Component {


    render() {
        const { video, onSelectedVideo } = this.props;
        return <div className="ui segment single-video" onClick={() => onSelectedVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt="" className="video-image" />
            <div className="video-header">{video.snippet.title}</div>
        </div>
    }
}

export default SingleVideo;

