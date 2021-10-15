import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import withAuth from './middleware/with-auth'
import Header from './components/header'
import Home from './pages/home/home'
import Login from './pages/auth/login'
import Profile from './pages/auth/profile'
import UserProfile from './pages/auth/user-profile'
import Post from './pages/post/post'
import Register from './pages/auth/register'

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post" exact component={Post} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" component={withAuth(Profile)} />
            <Route path="/user-profile/:id" exact component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
