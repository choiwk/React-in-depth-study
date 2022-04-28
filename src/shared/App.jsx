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
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button text="게시글 작성"></Button>
      </Permit>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 30px auto;
  width: 40%;
`;

export default App;
