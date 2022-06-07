import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import { useSelector } from 'react-redux';
import { firestore } from '../../shared/Firebase';
import { history } from '../redux/configureStore';

const PostDetail = (props) => {
  const id = props.match.params.id;

  const login = useSelector((state) => state.user.is_login);
  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);

  const post_idx = post_list.findIndex((p) => p.id === id);
  const post_data = post_list[post_idx];

  console.log('✅', post_data);

  const [post, setPost] = useState(post_data ? post_data : null);

  const accessDenied = () => {
    alert('로그인을 하셔야 게시글을 확인할 수 있습니다.');
    history.push('/login');
  };

  useEffect(() => {
    if (post) {
      return;
    }

    const postDB = firestore.collection('post');

    postDB
      .doc(id)
      .get()
      .then((doc) => {
        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        setPost(post);
      });
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Post
          {...post}
          is_me={
            login === false
              ? accessDenied()
              : post.user_info.user_id === user_info.uid
          }
        />
      )}
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
