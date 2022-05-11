import React, { useState } from 'react';
import { Grid, Text, Button, Image, Input } from '../elements/ImportBridge';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { history } from '../redux/configureStore';
import Upload from '../../shared/Upload';

const PostWrite = () => {
  const [contents, setContents] = useState('');

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

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
            history.replace('/login');
          }}
        ></Button>
      </Grid>
    );
  }
  return (
    <>
      <Grid padding="16px 0">
        <Text margin="0px" size="36px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px 0">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" />
      </Grid>

      <Grid padding="16px 0">
        <Input
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px 0">
        <Button text="게시글 작성" _onClick={addPost}></Button>
      </Grid>
    </>
  );
};

export default PostWrite;
