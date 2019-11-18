import axios from 'axios';

const KEY = 'AIzaSyCG2Ahk4rp4hhy_1dnAQXyTza1dvJNC3bk'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
