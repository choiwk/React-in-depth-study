import React, { useState } from 'react';
import { Grid, Input, Text, Button } from '../elements/ImportBridge';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentWrite = () => {
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState('');

  const commentTarget = (e) => {
    setCommentText(e.target.value);
  };

  const targetValue = () => {
    console.log(commentText);
    dispatch(commentActions.addCommentFB());
    setCommentText('');
  };

  return (
    <Grid is_flex>
      <Input
        placeholder="댓글 내용을 입력해주세요."
        _onChange={commentTarget}
        value={commentText}
      />
      <Button
        width="20%"
        text="작성하기"
        padding="13px 0"
        _onClick={targetValue}
      ></Button>
    </Grid>
  );
};

export default CommentWrite;
