import axios from 'axios';

const api = axios.create({
    baseURL:'https://backend.sckatgame.repl.co/',
});

export default api;