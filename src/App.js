import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './Components/AboutPage/AboutPage';
import AdminPage from './Components/AdminPage/AdminPage';
import BlogsPage from './Components/BlogsPage';
import Dashboard from './Components/Dashboard/Dashboard';
import EventsPage from './Components/EventsPage/EventsPage';
import HomePage from './Components/HomePage/HomePage';
import PolicyPage from './Components/PolicyPage';
import SelfHelp from './Components/SelfHelp/SelfHelp';
import TermPage from './Components/TermPage';

function App() {
  return (
    <Router >
      <>
        <Switch>
          <Route path='/adminpage'>
            <AdminPage />
          </Route>
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
