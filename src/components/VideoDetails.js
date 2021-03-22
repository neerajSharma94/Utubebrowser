import '../css/searchbar.css';
import React from 'react';

class VideoDetails extends React.Component {


    render() {
        const video = this.props.selectedVideo;
        if (!video) {
            return <div>Loading</div>
        }
        else {
            const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
            return <div>
                <div className="ui embed">
                    <iframe src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        }
    }
}

export default VideoDetails;