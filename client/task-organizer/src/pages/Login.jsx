import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');
    const tokenLocalStorage = localStorage.getItem('token');
    if (userLocalStorage !== null && tokenLocalStorage !== null) {
      history.push('/tasks')
    }
  }, []);

  const history = useHistory();

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
    history.push('/tasks');
  }

  const getTokenUser = async () => {
    axios
      .post('http://localhost:3030/login', { userEmail, userPassword})
      .then((res) => saveUserLocalStorage(res.data))
      .catch((error) => alert(error.response.data.message));
  }


  return (
    <section className="section-login">
      <div className="div-input-login">
        <p className="h2">LOGIN</p>
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
        <div className="div-login-butons">
          <button type="button" className="btn btn-success" onClick={ getTokenUser }>LOGIN</button>
          <button type="button" className="btn btn-outline-primary" onClick={ () => history.push('/create') }>CRIAR CONTA</button>
        </div>
      </div>
    </section>
  )
}
