import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import withAuth from './middleware/with-auth'
import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Post from './pages/post'
import Publish from './pages/publish'
import Create from './pages/create'

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
            <Route path="/publish" exact component={withAuth(Publish)} />
            <Route path="/create" exact component={withAuth(Create)} />
            <Route path="/profile" component={withAuth(Profile)} />
            {/* <Route path="/user-profile/:id" exact component={UserProfile} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
