import React from 'react';
import { Grid, Text, Button, Image, Input } from '../elements/ImportBridge';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';

const PostWrite = () => {
  console.log(history);
  const is_login = useSelector((state) => state.user.is_login);

  if (!is_login) {
    return (
      <Grid margin="100px 0" padding="16px" center>
        <Text size="32px" bold>
          알림!
        </Text>
        <Text size="16px">로그인 후에만 글을 작성할 수 있습니다.</Text>
        <Button
          text="로그인 하러가기"
          _onClick={() => {
            history.replace('/');
          }}
        ></Button>
      </Grid>
    );
  }
  return (
    <>
      <Grid padding="16px">
        <Text margin="0" size="36px" bold></Text>
      </Grid>
    </>
  );
};

export default PostWrite;
