import React from 'react';
import Post from '../components/Post';
import { useSelector } from 'react-redux';

const PostList = () => {
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
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
