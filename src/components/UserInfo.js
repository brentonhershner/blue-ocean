import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context'
// import { PhotosContext } from '../contexts/photos-context'

const UserInfoContext = () => {

  const { userName, setUserName } = useContext(UserContext)
  console.log(userName)
  // const { photos, setPhotos, updatePhoto } = useContext(PhotosContext)
  return (
    <div>
      {userName}
      <button onClick={()=>{setUserName('Josh Elder')}}>test</button>
      {/* {JSON.stringify(photos)}; */}
      {/* <button onClick={()=>{updatePhoto(1,{2:'WOWIE'})}}>test</button> */}
    </div>
  )
}

export default UserInfoContext;