import React from "react";
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { UserContext } from './UserContext';

const history = createBrowserHistory()

const App = () => {
  return (
    <UserContext.Provider value={{ 'title': 'hello' }} >
      <Router history={history} >
        <Route path='/' exact component={Home} />
        <Route path='/dashboard/:id' component={Dashboard} />
      </Router>
    </UserContext.Provider>);

}

export default App;
