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

api.updatePhoto = (editsObj) => {
  // EditsObj = {
  // userId: UserIdNumOfRequetsinguser,
  // photoId: idNumOfPhotoToUpdate,
  // description: ‘string to add for description if updating/adding’,
  // addTags: [‘array’, ‘ofTags’, ‘toAdd’],
  // removeTags: [‘array’, ‘ofTags’, ‘toRemove’],
  // accessLevel: NumOfPermission(0=private,1=onlySpecificUsers(future feature),2=allFriends,3=global)
  axios.patch(`${hostname}:${PORT}/api/photos/single`, editsObj)
  .then((res) => {
    console.log('successful patch, we should add in refresh photos API call or something here', res.body);
  })
  .catch((err) => { 
    console.log('error updating photo', err);
  })
};

api.updatePhotos = (editsObj) => {
  // EditsObj = {
  // userId: UserIdNumOfRequetsingUser,
  // photoIds: [arrayOf, photoIds, forAllUpdates, toBeApplied],
  // addTags: [‘array’, ‘ofTags’, ‘toAdd’],
  // removeTags: [‘array’, ‘ofTags’, ‘toRemove’],
  // accessLevel: NumOfPermission(0=private,1=onlySpecificUsers(future feature),2=allFriends,3=global)
  axios.patch(`${hostname}:${PORT}/api/photos/multiple`, editsObj)
  .then((res) => {
    console.log('successful patch, we should add in refresh photos API call or something here', res.body);
  })
  .catch((err) => { 
    console.log('error updating photo', err);
  })
};


// api.getAllPhotos = (userId) => {
//   axios.get(`${hostname}:${PORT}/api/photos/allPhotos`, {data: { userid }})
//   .then((res) => { console.log('put me in state or something', res.body)})
  // .catch((err) => { console.log('error getting all photos', err)})
// }


export default api;
