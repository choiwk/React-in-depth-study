import React from 'react';

import { Grid, Text, Button } from '../elements/ImportBridge';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { apiKey } from '../../shared/Firebase';

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_login && is_session) {
    return (
      <Grid is_flex padding-bottom="30px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            WonStargram
          </Text>
        </Grid>

        <Grid is_flex>
          <Button text="내정보"></Button>
          <Button text="알림"></Button>
          <Button
            text="로그아웃"
            _onClick={() => {
              dispatch(userActions.logOutFB());
            }}
          ></Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid is_flex padding="0 0 30px 0 ">
      <Grid>
        <Text margin="0px" size="24px" bold cursor>
          WonStargram
        </Text>
      </Grid>

      <Grid is_flex>
        <Button text="로그인" _onClick={() => history.push('/login')}></Button>
        <Button
          text="회원가입"
          _onClick={() => history.push('/signup')}
        ></Button>
      </Grid>
    </Grid>
  );
};

export default Header;
