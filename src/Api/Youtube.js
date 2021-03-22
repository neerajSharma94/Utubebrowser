import axios from 'axios';
const KEY = 'AIzaSyCAqP3jZn-NMdR4QVeKi7TKH_H7sUtk_ZM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        key: KEY,
    }
});


