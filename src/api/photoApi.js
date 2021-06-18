import axios from 'axios';
import apiConfig from './apiConfig';
const { hostname, PORT } = apiConfig;

const photoApi = {};

// Delete this function if it doesn't break the app.
// api.getImageList = async () => {
//   return fetch(`${hostname}:${PORT}/api/photos/list`, {
//     method: 'GET',
//   })
//     .then((res) => res.json())
//     .then((list) => list.filter(image => image.name !== '.DS_Store'))
//     .catch(err => { throw err });
// };

photoApi.upload = (formData) => {
  // TODO photoController.savePhotoData
  return axios.post(`${hostname}:${PORT}/api/photos/upload`,
    formData,
    {
      headers: { 'Content-type': 'multipart/form-data' },
    },
  )
}

photoApi.updatePhoto = (editsObj) => {
  // EditsObj = {
  // userId: UserIdNumOfRequetsinguser,
  // photoId: idNumOfPhotoToUpdate,
  // description: ‘string to add for description if updating/adding’,
  // tags: [‘array’, ‘ofTags’, ‘toAdd’], <---- any tags not in this array will be removed
  // accessLevel: NumOfPermission(0=private,1=onlySpecificUsers(future feature),2=allFriends,3=global)
  console.log('api', editsObj);
  axios.patch(`${hostname}:${PORT}/api/photos/single`, editsObj)
    .then((res) => {
      console.log('successful patch, we should add in refresh photos API call or something here', res.body);
    })
    .catch((err) => {
      console.log('error updating photo', err);
    })
};

photoApi.updatePhotos = (editsObj) => {
  // EditsObj = {
  // userId: UserIdNumOfRequetsingUser,
  // photoIds: [arrayOf, photoIds, forAllUpdates, toBeApplied],
  // addTags: [‘array’, ‘ofTags’, ‘toAdd’],
  // accessLevel: NumOfPermission(0=private,1=onlySpecificUsers(future feature),2=allFriends,3=global)
  axios.patch(`${hostname}:${PORT}/api/photos/multiple`, editsObj)
    .then((res) => {
      console.log('successful patch, we should add in refresh photos API call or something here', res.body);
    })
    .catch((err) => {
      console.log('error updating photo', err);
    })
};

photoApi.getUserPhotos = (userId) => {
  const path = `${hostname}:${PORT}/api/photos/userPhotos`;
  const query = `${new URLSearchParams({ userId })}`;
  // console.log('fetching photos of userId:', userId);
  if (!userId) { return; }
  return axios.get(`${path}?${query}`)
    .then((res) => res.data)
    .catch((err) => { console.log('error getting all photos', err) })
}

// api.getAllPhotos = (userId) => {
//   axios.get(`${hostname}:${PORT}/api/photos/allPhotos`, {data: { userid }})
//   .then((res) => { console.log('put me in state or something', res.body)})
// .catch((err) => { console.log('error getting all photos', err)})
// }

// api.getAllUsers = () => {
//   axios.get(`${hostname}:${PORT}/api/photos/allPhotos`, {data: { userid }})
//   .then((res) => { console.log('put me in state or something', res.body)})
// .catch((err) => { console.log('error getting all photos', err)})
// }

photoApi.getFeed = (userId) => {
  const path = `${hostname}:${PORT}/api/photos/feed`;
  const query = `${new URLSearchParams({ userId })}`;
  if (!userId) { return; }
  return axios.get(`${path}?${query}`)
    .then((res) => res.data)
    .catch((err) => { console.log('error getting all photos', err) })
}

export default photoApi;
