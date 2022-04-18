import styled from 'styled-components';

import { Text, Input, Grid, Button } from '../elements/ImportBridge';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

const Login = () => {
  console.log(getCookie('user_id'));
  const loginFunc = () => {
    setCookie('user_id', 'whdlzh', 3);
    setCookie('user_pwd', 'dbk03053', 3);
    setCookie('user_name', '최원근', 10);
    setCookie('user_birth', '960220', 1);
  };

  deleteCookie();
  return (
    <LoginContainer>
      <Grid padding="16px">
        <Text size={'32px'} bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            type="id"
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => console.log('아이디를 입력했어요')}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => console.log('비밀번호를 입력했어요')}
          ></Input>
        </Grid>
        <Button
          type="button"
          text="로그인버튼"
          _onClick={() => {
            loginFunc();
          }}
        >
          확인
        </Button>
      </Grid>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: 30px auto;
  width: 40%;
`;

export default Login;
