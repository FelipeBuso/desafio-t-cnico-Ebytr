import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Task.css';

export default function Task({ task }) {

  return (
    <div className="component-task">
      <p className="lead">{ task.taskCreationDate }</p>
      <p className="lead">{ task.taskTitle }</p>
      <p className="lead">{ task.taskStatus }</p>
      <p className="lead">{ task.taskForecastDate }</p>
    <button className="btn btn-success">EDITAR</button>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    taskCreationDate: PropTypes.string,
    taskTitle: PropTypes.string,
    taskStatus: PropTypes.string,
    taskForecastDate: PropTypes.string,
  }).isRequired,
}
