import React, { useState } from 'react';
import { Grid, Text, Button, Image, Input } from '../elements/ImportBridge';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';
import { history } from '../redux/configureStore';
import Upload from '../../shared/Upload';
import { useEffect } from 'react';

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;

  const is_edit = post_id ? true : false;

  let _post = is_edit ? post_list.find((el) => el.id === post_id) : null;

  const [contents, setContents] = useState(_post ? _post.contents : '');

  useEffect(() => {
    if (is_edit && !_post) {
      console.log('포스트 정보가 없습니다.');
      history.goBack();

      return;
    }
    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const emptyImage =
    'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
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
          {is_edit ? '게시글 수정' : '게시글 작성'}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px 0">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>

        <Image shape="rectangle" src={preview ? preview : emptyImage} />
      </Grid>

      <Grid padding="16px 0">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />
      </Grid>

      <Grid padding="16px 0">
        {is_edit ? (
          <Button text="게시글 수정" _onClick={editPost}></Button>
        ) : (
          <Button text="게시글 작성" _onClick={addPost}></Button>
        )}
      </Grid>
    </>
  );
};

export default PostWrite;
