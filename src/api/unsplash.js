import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bqNO9-XsMEH7bznObR0zE9zIr9np-s0uG9_4L-G-p6I'
    }
})