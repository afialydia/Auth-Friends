import React from 'react';
import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './components/PrivateRoute'
// import FriendForm from './components/FriendForm';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/' component={FriendsList} />
    </Router>
  );
}

export default App;
