import axios from 'axios';
import apiConfig from './apiConfig';
const { hostname, PORT } = apiConfig;

const albumApi = {};

// albums.getImageList = async () => {
//   return fetch(`${hostname}:${PORT}/api/images/list`, {
//     method: 'GET',
//   })
//     .then((res) => res.json())
//     .then((list) => list.filter(image => image.name !== '.DS_Store'))
//     .catch(err => { throw err });
// };

export default albumApi;
