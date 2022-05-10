import React from 'react';
import { Grid, Image, Text } from '../elements/ImportBridge';

const CommentList = () => {
  return (
    <>
      <Grid></Grid>
    </>
  );
};

export default CommentList;

const CommentItem = (props) => {
  return (
    <>
      <Grid></Grid>
    </>
  );
};

CommentItem.defaultProps = {
  user_profile: '',
  user_name: '대장군',
  user_id: 1,
  contents: '나는 이 나라의 장군이다.',
  insert_dt: '2021-01-01 19:00:00',
};
