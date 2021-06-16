import React from 'react'
import userApi from '../api/userApi';
// import dummyUser from '../dummyData/dummyUser'

export const UserContext = React.createContext({
  userId: '',
  userName: '',
  email: '',
  password: '',
  userLevel: 0,
  friends: [],
  requested: []
});

const setUserById = async (userId) => {
  const info = await userApi.getUserInfo(userId);
  console.log(info);
}

function UserContextProvider(props) {
  const [user, setUser] = React.useState(UserContext)


  return (
    <UserContext.Provider value={{ user, setUser, setUserById }} >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
