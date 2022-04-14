import React from 'react';
import { Grid, Text, Input, Button } from '../elements/ImportBridge';

const SignUp = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => console.log('아이디 입력')}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={() => console.log('닉네임 입력')}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => console.log('비밀번호 입력')}
          ></Input>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={() => console.log('비밀번호 재입력')}
          ></Input>
        </Grid>
        <Button
          type="button"
          text="회원가입 버튼"
          _onClick={() => console.log('회원가입 버튼 클릭')}
        >
          회원가입
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default SignUp;
