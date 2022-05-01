import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../../shared/Firebase';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const getPostFB = () => {
  return function(dispatch, getState, { history }) {
    const postDB = firestore.collection('post');

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((docElements) => {
        let _post = docElements.data();

        //? ['user_name', 'user_profile', 'contents','comment_cnt' ... ];
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            return { ...acc, [cur]: _post[cur] };
          },
          {
            id: docElements.id,
            user_infdo: {},
          }
        );

        // let _post = {
        //   id: docElements.id,
        //   ...docElements.data(),
        // };
        // let post = {
        //   id: _post.id,
        //   user_info: {
        //     user_name: _post.user_name,
        //     user_profile: _post.user_profile,
        //     user_id: _post.user_id,
        //   },
        //   image_url: _post.image_url,
        //   contents: _post.contents,
        //   comment_cnt: _post.comment_cnt,
        //   insert_dt: _post.insert_dt,
        // };
        post_list.push(post);
      });
      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreators };
