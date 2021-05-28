import React, { Component, createContext } from 'react'

export const PhotosContext = createContext();

class PhotosContextProvider extends Component {
  state = {
    photos: [
      {photoId: 1, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 2, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 3, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 4, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 5, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 6, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 7, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 8, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 9, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 10, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 11, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 12, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 13, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 14, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 15, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 16, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 17, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 18, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 19, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 20, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 21, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 22, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 23, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 24, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 25, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 26, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 27, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 28, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 29, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 30, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 31, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 32, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 33, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 34, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 35, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 36, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 37, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 38, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 39, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 40, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 41, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 42, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 43, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 44, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 45, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 46, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 47, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 48, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 49, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 50, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 51, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 52, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 53, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 54, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 55, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 56, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 57, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 58, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 59, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 60, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 61, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {photoId: 62, ownerId: 3, uploadDate: 'May 18 2021 18:11:26 GMT-0700', description: 't-pain is my bestie', tags: ['bff4ever', 'coachella', 't-pain'], accessLevel: 2, title: 'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {photoId: 63, ownerId: 3, uploadDate: 'May 27 2021 18:11:26 GMT-0700', description: 'about to tee-off', tags: ['t-time', 'mmpr'], accessLevel: 0, title: 'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {photoId: 64, ownerId: 2, uploadDate: 'May 16 2021 18:11:26 GMT-0700', description: 'Go go power rangers!', tags: ['mmpr', 'coachella'], accessLevel: 2, title: 'concert', url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {photoId: 65, ownerId: 2, uploadDate: 'May 17 2021 18:11:26 GMT-0700', description: 'man\'s best friend', tags: ['bff4ever', 'coachella'], accessLevel: 0, title: 'concert', url: 'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {photoId: 66, ownerId: 2, uploadDate: 'May 19 2021 18:11:26 GMT-0700', description: 'get on my level', tags: [], accessLevel: 2, title: 'concert', url: 'https://static.dw.com/image/57028885_101.jpg'},
      {photoId: 67, ownerId: 2, uploadDate: 'May 21 2021 18:11:26 GMT-0700', description: 'you can never have too much TP', tags: ['t-p'], accessLevel: 2, title: 'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {photoId: 68, ownerId: 3, uploadDate: 'May 11 2021 12:11:26 GMT-0700', description: 'my little teapot!', tags: ['mmpr', 'coachella', 't-pots'], accessLevel: 2, title: 'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      //{title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      //{title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
    ],
    albums:[{title: 'Really Really Long name Test Album 1', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'test2', 'test3']},
               {title: 'Test Album 2', description: 'Simple Test Album', owner:'Jun', permission:1, photos: [1,3,6,7,10,12], tags: ['test1', 'test2', 'hotdog']},
               {title: 'Test Album 3', description: 'Simple Test Album', owner:'Jun', permission:2, photos: [6,7,2,9,11,10,12], tags: ['coachella', 'test2', 'test3']},
               {title: 'Test Album 4', description: 'Simple Test Album', owner:'Jun', permission:1, photos: [6,8,7,10,12], tags: ['test1', 'test2', 'test3']},
               {title: 'Test Album 5', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'pineapple', 'test3']},
               {title: 'Test Album 1', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'test2', 'hotdog']},
               {title: 'Test Album 2', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'test2', 'test3']},
               {title: 'Test Album 3', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'test2', 'test3']},
               {title: 'Test Album 4', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['test1', 'coachella', 'test3']},
               {title: 'Test Album 5', description: 'Simple Test Album', owner:'Jun', permission:0, photos: [6,7,10,12], tags: ['pineapple', 'test2', 'test3']},]
  }

  setPhotos = (arr) => {
    this.setState({ photos: arr })
  }

  updatePhoto = (index, obj) => {
    let newList = this.state.photos.slice();
    newList[index] = obj
    this.setState({photos:newList});
  }

  render() {
    return(
      <PhotosContext.Provider value={{photos:this.state.photos, albums: this.state.albums, updatePhoto:this.updatePhoto, setPhotos:this.setPhotos}}>
        {this.props.children}
      </PhotosContext.Provider>
    );
  }

}

export default PhotosContextProvider