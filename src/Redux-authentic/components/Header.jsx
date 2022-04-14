import React from 'react';

import { Grid, Text, Button } from '../elements/ImportBridge';

const Header = () => {
  const locatedOnLogin = () => {
    document.location.href = '/login';
  };

  const locatedOnSignUp = () => {
    document.location.href = '/signup';
  };
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Header;
