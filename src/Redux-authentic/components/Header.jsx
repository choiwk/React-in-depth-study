import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Grid, Text, Button } from '../elements/ImportBridge';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

const Header = () => {
  const [is_login, setIsLogin] = useState(false);

  useEffect(() => {
    let cookie = getCookie('user_id');
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const locatedOnLogin = () => {
    document.location.href = '/login';
  };

  const locatedOnSignUp = () => {
    document.location.href = '/signup';
  };

  if (is_login) {
    return (
      <HeaderContainer>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보" _onClick={locatedOnLogin}></Button>
            <Button text="알림" _onClick={locatedOnSignUp}></Button>
            <Button
              text="로그아웃"
              _onClick={() => deleteCookie('user_id')}
            ></Button>
          </Grid>
        </Grid>
      </HeaderContainer>
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

const HeaderContainer = styled.header`
  border: 1px solid red;
`;
export default Header;
