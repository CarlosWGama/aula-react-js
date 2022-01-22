import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:1337/api'
});

export default api;