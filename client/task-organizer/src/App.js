import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/tasks" component={ Tasks } />
        <Route path="/create" component={ CreateAccount } />
      </Switch>
      
    </div>
  );
}

export default App;
