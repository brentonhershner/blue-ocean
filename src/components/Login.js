import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
  }
  return (
    <div>
      <GoogleLogin
        clientId="652150268889-1ropi2okc0kble20c913qi5lk88krb4t.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Login;