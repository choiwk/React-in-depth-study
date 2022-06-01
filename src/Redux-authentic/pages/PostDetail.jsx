import React from 'react';
import Post from '../components/Post';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import { useSelector } from 'react-redux';

const PostDetail = (props) => {
  const id = props.match.params.id;
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);
  console.log('post_list : ', post_list);
  const post_idx = post_list.findIndex((el) => el.id === id);
  console.log('post_idx : ', post_idx);
  const post = post_list[post_idx];
  console.log('post : ', post);
  console.log(user_info);

  return (
    <>
      <Post {...post} is_me={post.user_info.user_id === user_info.uid} />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default PostDetail;
