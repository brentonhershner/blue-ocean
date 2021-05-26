import React from 'react';

const Signup = () => {

  const displayExistingEmail = () => {
    document.getElementsByClassName('message')[0].innerText = 'User exists at that email address!';
  }
  const validateEmail = () => {
    const email = document.formBox.email.value;
    const at = email.indexOf('@');
    const dot = email.indexOf('.');
    if (at < 1) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else if (dot < at + 2) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else if (dot + 2 >= email.length) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Email address is valid!';
      document.getElementsByClassName('inActiveInput')[0].removeAttribute('disabled', '');
    }
  }
  const validateUserName = () => {
    if (document.formBox.userName.value.length >= 8) {
      document.getElementsByClassName('message')[0].innerText = 'Username length is good!';
      document.getElementsByClassName('inActiveInput')[1].removeAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Username needs to be at least 8 characters long!';
      document.getElementsByClassName('inActiveInput')[1].setAttribute('disabled', '');
    }
  }
  const validatePassword = () => {
    if (document.formBox.password.value.length >= 8) {
      document.getElementsByClassName('message')[0].innerText = 'Password length is good!';
      document.getElementsByClassName('inActiveInput')[2].removeAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Password needs to be at least 8 characters long!';
      document.getElementsByClassName('inActiveInput')[2].setAttribute('disabled', '');
    }
  }
  const validateConfirm = () => {
    if (document.formBox.confirm.value === document.formBox.password.value) {
      document.getElementsByClassName('message')[0].innerText = 'Passwords match!'
      document.getElementsByClassName('inActive')[0].removeAttribute('disabled', '');
      document.getElementsByClassName('inActive')[0].classList.add('active');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Passwords don\'t match!'
      document.getElementsByClassName('inActive')[0].setAttribute('disabled', '');
      document.getElementsByClassName('inActive')[0].classList.remove('active');
    }
  }

  return (
    <div>
      <div className="modalBackground">
        <div className="head"><h2></h2></div>
        <form name="formBox" className="formBox" action="/register" method="POST">
          <h2>Register User</h2>
          <div className="message"></div>
          <label htmlFor="firstName">First Name:</label>
          <input className="login" type="text" id="firstName" name="firstName" required></input>
          <label htmlFor="lastName">Last Name:</label>
          <input className="login" type="text" id="lastName" name="lastName" required></input>
          <label htmlFor="email">Email:</label>
          <input className="login" onKeyUp={() => validateEmail()} type="email" id="email" name="email" required></input>
          <label htmlFor="userName">Username:</label>
          <input onKeyUp={() => validateUserName()} disabled className="inActiveInput login" type="text" id="userName" name="userName" required></input>
          <label htmlFor="password">Password:</label>
          <input onKeyUp={() => validatePassword()} disabled className="inActiveInput login" type="password" id="password" name="password" required></input>
          <label htmlFor="confirm">Confirm Password:</label>
          <input onKeyUp={() => validateConfirm()} disabled className="inActiveInput login" type="password" id="confirm" name="confirm" required></input>
          <div className="buttonGrid">
            <button disabled className="inActive" type="submit" onClick={() => displayExistingEmail()}>Register User</button>
            <button className="active" type="button" onClick="window.location.href='/login'">Back to Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;