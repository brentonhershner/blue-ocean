import axios from 'axios';
import apiConfig from './apiConfig';
const { hostname, PORT } = apiConfig;

const userApi = {};

userApi.friendAction = (currentUser, targetUser, action) => {
  //action should be one of the following:
  //['request', 'cancelRequest', 'accept', 'reject', 'remove']
  axios.put(`${hostname}:${PORT}/api/users/friends/${action}`,
    {
      currentUser, targetUser
    })
    .then((res) => { console.log('this is the response, should add in some sort of update function as well', res) })
    .catch((err) => { console.log(`there was an error performing ${action} friend`, err) });
}

userApi.getUserInfo = (userId) => {
  // console.log(`userApi.getUserInfo for ${userId}`);
  const path = `${hostname}:${PORT}/api/users/info`;
  const query = `${new URLSearchParams({ userId })}`;
  return axios.get(`${path}?${query}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('error getting updated user Info', err);
      throw err;
    })
}

userApi.getAll = () => {
  console.log(`userApi.getAll`);
  const path = `${hostname}:${PORT}/api/users/all`;
  return axios.get(`${path}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('error getting users', err);
      throw err;
    })
}



export default userApi;
