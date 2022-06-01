import React, { useEffect } from 'react';
import Post from '../components/Post';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import InfinityScroll from '../../shared/InfinityScroll';

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user); //로그인한 상태인지.
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <>
      <InfinityScroll
        callNext={() => dispatch(postActions.getPostFB(paging.next))}
        is_next={paging.next ? true : false}
        is_loading={is_loading}
      >
        {post_list.map((el, idx) => {
          if (user_info && el.user_info.user_id === user_info.uid) {
            return <Post key={el.id} {...el} is_me />;
          }
          return <Post key={el.id} {...el} />;
        })}
      </InfinityScroll>
    </>
  );
};

export default PostList;
