import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import Permit from '../../shared/Permit';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const login = useSelector((state) => state.user.is_login);
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);

  const post_idx = post_list.findIndex((el) => el.id === id);
  const post_data = post_list[post_idx];

  const accessDenied = () => {
    console.log('Ehd!');

    // alert('로그인이 필요한 페이지입니다.');
    // history.push('/login');
  };

  useEffect(() => {
    if (post_data) {
      return;
    }
    dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <>
      {post_data && (
        <Post
          {...post_data}
          is_me={
            login
              ? post_data.user_info.user_id === user_info.uid
              : post_data.user_info.user_id === null
          }
        />
      )}
      <Permit>
        <CommentWrite post_id={id} />
      </Permit>
      <CommentList post_id={id} />
    </>
  );
};

export default PostDetail;
