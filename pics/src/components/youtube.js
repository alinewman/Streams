import axios from 'axios';

const KEY ='AIzaSyBMj-oEKb3K0Zp5iXrtIFhvQUKhzzebMxY';	 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});

