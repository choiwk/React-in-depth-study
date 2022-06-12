import React, { useState } from 'react';
import { Grid, Input, Text, Button } from '../elements/ImportBridge';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const { post_id } = props;
  const [commentText, setCommentText] = useState('');

  const commentTarget = (e) => {
    setCommentText(e.target.value);
  };

  const write = () => {
    if (commentText === '') {
      window.alert('댓글을 입력해주세요!');
      return;
    }
    // 파이어스토어에 추가합니다.
    dispatch(commentActions.addCommentFB(post_id, commentText));
    // 입력된 텍스트는 지우기!
    setCommentText('');
  };

  return (
    <Grid is_flex>
      <Input
        placeholder="댓글 내용을 입력해주세요."
        _onChange={commentTarget}
        value={commentText}
        is_submit
      />
      <Button
        width="20%"
        text="작성하기"
        padding="13px 0"
        _onClick={write}
      ></Button>
    </Grid>
  );
};

export default CommentWrite;
