import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/AboutPage';
import AssessmentPage from './Components/AssessmentPage';
import BlogsPage from './Components/BlogsPage';
import Dashboard from './Components/Dashboard';
import EventsPage from './Components/EventsPage';
import HomePage from './Components/HomePage';
import PolicyPage from './Components/PolicyPage';
import SelfHelp from './Components/SelfHelp';
import TermPage from './Components/TermPage';


function App() {
  return (
    <Router >
      <>
        <Switch>
          <Route path='/policypage'>
            <PolicyPage />
          </Route>
          <Route path='/termsandconditionshfu'>
            <TermPage />
          </Route>
          <Route path='/events'>
            <EventsPage />
          </Route>
          <Route path='/about'>
            <AboutPage />
          </Route>
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
