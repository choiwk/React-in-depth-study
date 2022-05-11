import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <>
      <Post />
      {post_list.map((postItem, idx) => (
        <Post key={idx} {...postItem} />
      ))}
    </>
  );
};

export default PostList;
