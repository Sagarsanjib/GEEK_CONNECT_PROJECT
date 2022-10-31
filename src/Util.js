import axios from  'axios';

/*axios.get("https://dummyapi.io/data/v1/post", {headers: {'app-id': process.env.REACT_APP_API_KEY}})*/
    
const dummyapi = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  timeout: 10000,
  headers: {'app-id': process.env.REACT_APP_API_KEY}
});

export {dummyapi};