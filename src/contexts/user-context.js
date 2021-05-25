import React, { Component, createContext } from 'react'

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    userName: 'TestUser',
    userType: 'admin',
    userId: 1
  }

  setUserName = (newUserName) => {
    this.setState({ userName: newUserName})
  }

  render() {
    return(
      <UserContext.Provider value={{...this.state, setUserName:this.setUserName}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }

}

export default UserContextProvider