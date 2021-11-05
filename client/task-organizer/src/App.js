import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import CreateAccount from './pages/CreateAccount';
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/tasks" component={ Tasks } />
        <Route exact path="/task" component={ CreateTask } />
        <Route exact path="/tasks/:id" component={ EditTask } />
        <Route path="/create" component={ CreateAccount } />
      </Switch>
      
    </div>
  );
}

export default App;
