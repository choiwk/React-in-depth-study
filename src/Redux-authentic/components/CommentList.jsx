import React, { useEffect } from 'react';
import { Grid, Image, Text } from '../elements/ImportBridge';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);

  const { post_id } = props;

  useEffect(() => {
    if (!comment_list.post_id) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  return (
    <>
      <Grid>
        <CommentItem></CommentItem>
      </Grid>
    </>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width="auto">
        <Image shape="circle" />
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text bold>{user_name}</Text>
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: '',
  user_name: '대장군',
  user_id: 1,
  contents: '나는 이 나라의 장군이다.',
  insert_dt: '2021-01-01 19:00:00',
};
