import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function EditTask() {
  // const userIdLocal = JSON.parse(localStorage.getItem('user'))._id;
  // const [userId, setUserId] = useState(userIdLocal);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskCreationDate, setTaskCreationDate] = useState('');
  const [taskForecastDate, setTaskForecastDate] = useState('');

  const { pathname } = useLocation();

  useEffect(async() => {
  //  const idTask 
    const token = await JSON.parse(localStorage.getItem('token'));
    axios
      .get('http://localhost:3030' + pathname, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((error) => alert(error.response.data.message))
    // console.log(task);
  });

  const handlerTaskTitle = ({ target }) => {
    const { value } = target;
    setTaskTitle(value)
  };

  const handlerTaskStatus = ({ target }) => {
    const { value } = target;
    setTaskStatus(value)
  };

  const handlerTaskCreationDate = ({ target }) => {
    const { value } = target;
    setTaskCreationDate(value)
  };

  const handlerForecastDate = ({ target }) => {
    const { value } = target;
    setTaskForecastDate(value)
  };

  return (
    <section className="edit-task-section">
      <div className="task-creation-input-div">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tarefa</span>
          <input type="text" className="form-control" value={ taskTitle } onChange={ (e) => handlerTaskTitle(e) }/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Starus</span>
          <input type="text" className="form-control" value={ taskStatus } onChange={ (e) => handlerTaskStatus(e) }/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Data</span>
          <input type="date" className="form-control" value={ taskCreationDate } onChange={ (e) => handlerTaskCreationDate(e) }/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Previsão de conclusão</span>
          <input type="date" className="form-control" value={ taskForecastDate } onChange={ (e) => handlerForecastDate(e) }/>
        </div>
        <button type="button" className="btn btn-success">SALVAR TAREFA</button>
      </div>
      
    </section>
  )
}
