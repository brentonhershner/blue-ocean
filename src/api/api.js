import axios from 'axios';
import apiConfig from './apiConfig';
const { hostname, PORT } = apiConfig;

const api = {};

api.kitchenSink = (userId) => {

  console.log('kitchen sink');

  const path = `${hostname}:${PORT}/api/everything`;
  const query = `${new URLSearchParams({ userId })}`;
  if (!userId) { return; }
  return axios.get(`${path}?${query}`)
    .then((res) => res.data)
    .catch((err) => { console.log('error getting something', err) })
}

export default api;
