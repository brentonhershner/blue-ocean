import React from 'react';

export const PhotosContext = React.createContext();

const PhotosContextProvider = (props) => {
  const [photos, setPhotos] = React.useState([
    { photoId: 1, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg' },
    { photoId: 2, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg' },
    { photoId: 3, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg' },
    { photoId: 4, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg' },
    { photoId: 5, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU' },
    { photoId: 6, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559' }
  ])

  // const updatePhoto = (index, obj) => {
  //   let newList = this.state.photos.slice();
  //   newList[index] = obj
  //   this.setState({ photos: newList });
  // }

  return (
    <PhotosContext.Provider value={{photos, setPhotos}}>
      {props.children}
    </PhotosContext.Provider>
  );
}

export default PhotosContextProvider