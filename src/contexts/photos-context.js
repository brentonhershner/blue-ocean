import React, { Component, createContext } from 'react'

export const PhotosContext = createContext();

class PhotosContextProvider extends Component {
  state = {
    photos: [{1:'wow'},{2:'wow'},{3:'wow'}],
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