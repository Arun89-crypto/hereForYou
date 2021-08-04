import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AssessmentPage from './Components/AssessmentPage';
import BlogsPage from './Components/BlogsPage';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import SelfHelp from './Components/SelfHelp';


function App() {
  return (
    <Router >
      <>
        <Switch>
          <Route path='/assessment'>
            <AssessmentPage />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/blogpage'>
            <BlogsPage />
          </Route>
          <Route path='/selfhelp'>
            <SelfHelp />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
