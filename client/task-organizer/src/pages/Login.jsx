import React, { useState } from 'react';

import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChangeEmail = ({ target }) => {
    const { value } = target;
    setUserEmail(value);
  };

  const handleChangePassword = ({ target }) => {
    const { value } = target;
    setUserPassword(value);
  }

  const saveUserLocalStorage = (data) => {
    const { user, userToken } = data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(userToken));
  }

  const getTokenUser = async () => {
    axios
      .post('http://localhost:3030/login', { userEmail, userPassword})
      .then((res) => saveUserLocalStorage(res.data))
      // .then((result) => result.data)
      .catch((error) => console.log(error.message));

  }


  return (
    <section className="section-login">
      <div className="div-input-login">
        <p className="h2">Login</p>
        <div className="input-group mb-3">
        <span className="input-group-text">email</span>
        <input
          type="text"
          className="form-control"
          name="userEmail"
          value={ userEmail }
          onChange={ (e) => handleChangeEmail (e) }
        />
        </div>
        <div className="input-group mb-3">
        <span className="input-group-text">senha</span>
        <input
          type="password"
          className="form-control"
          name="userPassword"
          value={ userPassword }
          onChange={ (e) => handleChangePassword (e) }
        />
        </div>
        <button type="button" className="btn btn-primary" onClick={ getTokenUser }>LOGIN</button>
      </div>
    </section>
  )
}
