const api = {};

const hostname = 'http://localhost';
const PORT = '3001';

api.getImageList = async () => {
  return fetch(`${hostname}:${PORT}/getimagelist`, {
    method: 'GET',
  })
  .then((res) => res.json())
  .then((list) => list)
  .catch(err => {throw err});
};

export default api;