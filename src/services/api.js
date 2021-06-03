import axios from 'axios';

const api = axios.create({
    baseURL:'https://backend-sckatgame.herokuapp.com/',
});

export default api;