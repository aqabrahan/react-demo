import axios from 'axios';
const restClient = axios.create({
  baseURL: 'https://api.github.com/'
});

export default restClient;