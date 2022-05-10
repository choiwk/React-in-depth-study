import React from 'react';

import Post from '../components/Post';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';

const PostDetail = () => {
  return (
    <>
      <Post />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default PostDetail;
