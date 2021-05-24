import axios from 'axios';

const api = {};

const hostname = 'http://localhost';
const PORT = '3001';


api.getImageList = async () => {
  return fetch(`${hostname}:${PORT}/api/images/list`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((list) => {
      return list.map(image => {
        image.url = `${hostname}:${PORT}/${image.url}`;
        return image;
      })
    })
    .catch(err => { throw err });
};

api.upload = (image) => {
  let formData = new FormData();
  formData.append('file', image);

  return axios.post(`${hostname}:${PORT}/api/images/upload`,
    formData,
    {
      headers: { 'Content-type': 'multipart/form-data' }
    },
  )

}

export default api;