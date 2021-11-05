import React, { useState } from 'react'
import { useHistory  } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateTask.css';

export default function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskCreationDate, setTaskCreationDate] = useState('');
  const [taskForecastDate, setTaskForecastDate] = useState('');

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

  const history = useHistory();

  const saveTask = async () => {
    const token = await JSON.parse(localStorage.getItem('token'));
    // const header = { Authorization: token };
    const userId = await JSON.parse(localStorage.getItem('user'))._id;
    const body = { userId, taskTitle, taskStatus, taskCreationDate, taskForecastDate, taskDetails:'', taskDoneDate:'' };

    // console.log(header);
    axios
      .post('http://localhost:3030/tasks', body, { headers: { Authorization: token } })
      .then(() => history.push('/tasks'))
      .catch((error) => alert(error.response.data.message))
  }


  return (
    <section className="task-creation-section">
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
        <button type="button" className="btn btn-success" onClick={ () => saveTask() }>SALVAR TAREFA</button>
      </div>
    </section>
  )
}
