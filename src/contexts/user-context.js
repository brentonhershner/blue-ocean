import React from 'react'
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

function UserContextProvider(props) {
  const [user, setUser] = React.useState(UserContext)

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
