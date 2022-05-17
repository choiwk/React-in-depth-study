import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import PostList from '../Redux-authentic/pages/PostList';
import SignUp from '../Redux-authentic/pages/SignUp';
import Login from '../Redux-authentic/pages/Login';
import Header from '../Redux-authentic/components/Header';
import Permit from '../shared/Permit';
import { Grid, Button } from '../Redux-authentic/elements/ImportBridge';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../Redux-authentic/redux/configureStore';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../Redux-authentic/redux/modules/user';
import { apiKey } from './Firebase';
import PostWrite from '../Redux-authentic/pages/PostWrite';
import PostDetail from '../Redux-authentic/pages/PostDetail';
import Search from '../shared/Search';
import Notification from '../Redux-authentic/pages/Notification';

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  return (
    <AppContainer>
      <Grid>
        <Header />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/search" exact component={Search} />
          <Route path="/noti" exact component={Notification} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => history.push('/write')}
        ></Button>
      </Permit>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 30px auto;
  width: 40%;
`;

export default App;
