import './css/searchbar.css';
import React from 'react';
import Searchbar from './components/Searchbar'
import youtube from './Api/Youtube';
import VideosList from './components/VideosList';
import VideoDetails from './components/VideoDetails';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };


    componentDidMount() {
        this.onSubmit('justice league')
    }


    onSubmit = async (data) => {
        const response = await youtube.get('/search', {
            params: {
                q: data
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onSelectedVideo = (video) => {
        this.setState({ selectedVideo: video });

    }




    render() {
        return (
            <div>
                <div className='ui segment'>
                    <Searchbar onSubmit={this.onSubmit} />
                </div>
                <div className="video-screen">
                    <VideoDetails selectedVideo={this.state.selectedVideo} />
                    <VideosList videos={this.state.videos}
                        onSelectedVideo={this.onSelectedVideo} />
                </div>
            </div>
        )
    }
}

export default App;