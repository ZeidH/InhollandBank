
import React from 'react';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
      </Router>
    )
}
  const Home = () => (
    <div>
      <h1>Home Page</h1>
    </div>
  );

export default App;