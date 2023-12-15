import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/everything?q=programming&apiKey=ceeadb271f7b47fd8a772fe4aa3ff1ae&sortBy=relevancy&pageSize=10'
});

export default api;
