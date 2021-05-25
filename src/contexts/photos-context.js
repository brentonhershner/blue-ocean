import React, { Component, createContext } from 'react'

export const PhotosContext = createContext();


class PhotosContextProvider extends Component {
  state = {
    photos: [
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      {title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      {title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
      {title:'concert', url:'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1333,w_2000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Crowd_07.20.18_Ben_Lindbloom_5714_at8smr.jpg'},
      {title:'concert', url:'https://blog.ticketmaster.ie/wp-content/uploads/2020/03/netflix-720x405-1.jpg'},
      {title:'concert', url:'https://static.dw.com/image/57028885_101.jpg'},
      {title:'concert', url: 'https://media.timeout.com/images/105740408/630/472/image.jpg'},
      {title:'concert', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rnAQsKS3MLdXOs-u-IemPxYJRK5Hf99l3A&usqp=CAU'},
      //{title:'concert', url: 'https://wp-denverite.s3.amazonaws.com/wp-content/uploads/sites/4/2018/07/180718-RED-ROCKS-CONCERT-MUSIC-KEVINJBEATY-04-1024x576.jpg?resize=994,559'},
      //{title:'concert', url: 'https://static.dw.com/image/18920718_403.jpg'},
    ]
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
      <PhotosContext.Provider value={{photos:this.state.photos, updatePhoto:this.updatePhoto, setPhotos:this.setPhotos}}>
        {this.props.children}
      </PhotosContext.Provider>
    );
  }

}

export default PhotosContextProvider