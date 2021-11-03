import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';
import '../styles/Tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [ isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('creationDate')
  const [sortDirection, setSortDirection] = useState(true)

  useEffect(() => {
    const header = { Authorization: JSON.parse(localStorage.getItem('token'))}
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    axios
      .get(`http://localhost:3030/tasks/${userId}`, { headers: header })
      .then((res) => setTasks(res.data))
      .catch((error) => console.log(error.message));
    setIsLoading(false);
  },[]);

  console.log(sortBy);

  const sortTask = () => {
    
  }

  return (
    <div className="section-tasks">
      <div className="div-titles-tasks">
        <div className="div-titles">
          <p className="h5">Data de criação</p>
          <p className="h5">Tarefa</p>
          <p className="h5">Status</p>
          <p className="h5">Previsão de término</p>
        </div>
        {
          isLoading 
          ? <h2>Loading...</h2>
          : <ul className="div-tasks list-group">
              { tasks.map((taskData, i) => (
                <li className="list-group-item" key= { i }>
                  <Task task={ taskData } />
                </li> 
                  
              )) }
          </ul>
        }
      </div>
      <nav className="div-side-nav">
        <div className="sort-options d-grid gap-2">
          <button className="btn btn-primary" type="button" onClick={ () => setSortBy('creationDate') }>Data de Criação</button>
          <button className="btn btn-primary" type="button" onClick={ () => setSortBy('task') }>Tarefa</button>
          <button className="btn btn-primary" type="button" onClick={ () => setSortBy('status') }>Status</button>
        </div>
        <div className="sort-direction d-grid gap-2 d-md-block">
          <button className="btn btn-primary" type="button" onClick={ () => setSortDirection(true) }>Crescente</button>
          <button className="btn btn-primary" type="button" onClick={ () => setSortDirection(false) }>Descrescente</button>
        </div>
      </nav>
    </div>
  )
}
