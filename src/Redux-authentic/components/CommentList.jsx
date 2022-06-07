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

  if (!comment_list[post_id] || !post_id) {
    // 출력할 댓글이 없으면 null으로 화면에 아무것도 표기안시킴.
    return null;
  }

  return (
    <>
      <Grid>
        {comment_list[post_id].map((el, idx) => (
          <CommentItem key={idx} {...el} />
        ))}
      </Grid>
    </>
  );
};

CommentList.defaultProps = {
  post_id: null,
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
