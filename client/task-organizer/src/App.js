import React from "react";
import { Route, Switch } from 'react-router-dom'
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/tasks" component={ Tasks } />
      </Switch>
      
    </div>
  );
}

export default App;
