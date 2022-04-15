import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../Redux-authentic/pages/PostList';
import SignUp from '../Redux-authentic/pages/SignUp';
import Login from '../Redux-authentic/pages/Login';
import { Grid } from '../Redux-authentic/elements/ImportBridge';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;