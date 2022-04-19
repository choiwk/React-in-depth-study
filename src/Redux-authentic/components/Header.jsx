import React from 'react';

import { Grid, Text, Button } from '../elements/ImportBridge';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const locatedOnLogin = () => {
    document.location.href = '/login';
  };

  const locatedOnSignUp = () => {
    document.location.href = '/signup';
  };

  if (is_login) {
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logOut({}));
              }}
            ></Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헬로
          </Text>
        </Grid>

        <Grid is_flex>
          <Button text="로그인" _onClick={locatedOnLogin}></Button>
          <Button text="회원가입" _onClick={locatedOnSignUp}></Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
