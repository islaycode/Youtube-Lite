import axios from 'axios';

const KEY = 'AIzaSyB8dqsEq_j4Jebp6eQELJcqxeKfUfGZaA4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
})