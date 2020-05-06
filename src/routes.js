import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import LoginForm from './pages/Login/LoginForm';
import LoginRoute from './templates/login/Body/Body';

export default function Routes() {
  return (

    <Router>
      <Switch>
        <LoginRoute exact path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}
