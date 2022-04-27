import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button } from '../elements/ImportBridge';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { emailCheck } from '../../shared/common';
const SignUp = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  const signUpCheck = () => {
    if (pwd !== pwdCheck) {
      alert('비밀번호를 다시 확인해주세요.');
      return;
    }
    if (id === '' || pwd === '' || userName === '') {
      alert('양식에 누락된 사항이 있습니다.');
      return;
    }
    if (!emailCheck(id)) {
      alert('이메일 형식이 맞지 않습니다.');
    }

    dispatch(userActions.signupFB(id, pwd, userName));
  };
  return (
    <SignUpContainer>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="이메일"
            placeholder="이메일을 입력해주세요."
            _onChange={(e) => setId(e.target.value)}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => setUserName(e.target.value)}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            type="password"
            label="비밀번호"
            placeholder="6글자 이상 비밀번호를 입력해주세요."
            _onChange={(e) => setPwd(e.target.value)}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => setPwdCheck(e.target.value)}
          ></Input>
        </Grid>
        <Button type="button" text="회원가입하기" _onClick={signUpCheck}>
          회원가입
        </Button>
      </Grid>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  margin: 30px auto;
  width: 40%;
`;

export default SignUp;
