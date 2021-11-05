import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateAccount.css';

export default function CreateAccount() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDepartament, setUserDepartament] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const history = useHistory();

  const createAccount = () => {
    const body = {
      userName, userEmail, userDepartament, userPassword
    };
    axios
      .post('http://localhost:3030/users', body)
      .then(() =>  history.push('/'))
      .catch((error) => alert(error.response.data.message));
  };

  const handlerUserName = ({ target }) => {
    const { value } = target;
    setUserName(value);
  };

  const handlerUserEmail = ({ target }) => {
    const { value } = target;
    setUserEmail(value);
  };

  const handlerUserDepartament = ({ target }) => {
    const { value } = target;
    setUserDepartament(value);
  };

  const handlerUserPassword = ({ target }) => {
    const { value } = target;
    setUserPassword(value);
  };
  
  
  return (
    <section className="create-account-section">
      <div className="create-account-inputs">
        <p className="h4">Cadastrar Usuário</p>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nome</span>
          <input type="text" className="form-control" value={ userName } onChange={ (e) => handlerUserName(e) }/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Email</span>
          <input type="text" className="form-control" value={ userEmail } onChange={ (e) => handlerUserEmail(e) } />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Departamento</span>
          <input type="text" className="form-control" value={ userDepartament } onChange={ (e) => handlerUserDepartament(e) } />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Senha</span>
          <input type="password" className="form-control" value={ userPassword } onChange={ (e) => handlerUserPassword(e) } />
        </div>
        <button type="button" className="btn btn-success" onClick={ () => createAccount() }>Cadastrar</button>
      </div>
      
    </section>
  )
}
