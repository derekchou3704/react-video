import axios from 'axios'

const KEY = 'AIzaSyDZxwieR-tsCcRpSJo9eqBEmWuiXCSYuX8'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})