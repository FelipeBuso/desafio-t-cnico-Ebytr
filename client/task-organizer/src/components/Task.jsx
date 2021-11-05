import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Task.css';

export default function Task({ task }) {
  const history = useHistory();

  const excludeTask = async () => {
    const token = await JSON.parse(localStorage.getItem('token'));
    const idTask = task._id;
    console.log(idTask);
    axios
      .delete('http://localhost:3030/tasks/' + idTask, { headers: { Authorization: token } })
      .then(() => history.push('/'))
      .catch((error) => alert(error.response.data.message))

  }

  return (
    <div className="component-task">
      <p className="lead">{ task.taskCreationDate }</p>
      <p className="lead">{ task.taskTitle }</p>
      <p className="lead">{ task.taskStatus }</p>
      <p className="lead">{ task.taskForecastDate }</p>
      <div className="div-button">
        <button className="btn btn-warning">EDITAR</button>
        <button className="btn btn-danger" onClick={ () => excludeTask() }>EXCLUIR</button>
      </div>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string,
    taskCreationDate: PropTypes.string,
    taskTitle: PropTypes.string,
    taskStatus: PropTypes.string,
    taskForecastDate: PropTypes.string,
  }).isRequired,
}
