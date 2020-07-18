import React from 'react';
import './App.css';
import "antd/dist/antd.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Reset from './pages/Auth/Reset';
import Master from './pages/Master';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/reset" component={Reset} />
          <Route path="/admin" component={Master} />
          <Route path="*">
            <h1 className="text-center mt-5"><b>404 Page not found</b></h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
