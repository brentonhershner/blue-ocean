import axios from 'axios';

const api = {};

const hostname = 'http://localhost';
const PORT = '3001';


api.getImageList = async () => {
  return fetch(`${hostname}:${PORT}/api/images/list`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((list) => list.filter(image => image.name !=='.DS_Store'))
    .catch(err => { throw err });
};

api.upload = (formData) => {
  return axios.post(`${hostname}:${PORT}/api/images/upload`,
    formData,
    {
      headers: { 'Content-type': 'multipart/form-data' }
    },
  )
}

api.friendAction = (currentUser, targetUser, action) => {
  //action should be one of the following:
  //['request', 'cancelRequest', 'accept', 'reject', 'remove']

  axios.put(`${hostname}:${PORT}/api/users/friends/${action}`, {
    currentUser, targetUser
  })
  .then((res) => {console.log('this is the response, should add in some sort of update function as well', res)})
  .catch((err) => {console.log(`there was an error performing ${action} friend`, err)});
}

api.getUserInfo = (currentUserId) => {
  axios.get(`${hostname}:${PORT}/api/users/${currentUserId}`)
  .then((res) => {
    console.log('new User Info, set me to state or something', res.body);
  })
  .catch((err) => {
    console.log('error getting updated user Info', err);
  })
}

// api.getAllPhotos = (userId) => {
//   axios.get(`${hostname}:${PORT}/api/photos/allPhotos`, {data: { userid }})
//   .then((res) => { console.log('put me in state or something', res.body)})
  // .catch((err) => { console.log('error getting all photos', err)})
// }


export default api;