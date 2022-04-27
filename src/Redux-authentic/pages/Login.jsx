import React, { useState } from 'react';
import styled from 'styled-components';

import { Text, Input, Grid, Button } from '../elements/ImportBridge';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../../shared/common';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginFunc = () => {
    console.log(id);
    if (id === '' || password === '') {
      alert('입력 형식이 올바르지 않습니다.');
      return;
    }
    if (!emailCheck(id)) {
      alert('메일 형식이 맞지 않습니다');
    }
    dispatch(userActions.loginFB(id, password));
  };

  return (
    <LoginContainer>
      <Grid padding="16px">
        <Text size={'32px'} bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            type="id"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            _onChange={(e) => setId(e.target.value)}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => setPassword(e.target.value)}
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
