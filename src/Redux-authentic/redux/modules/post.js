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
          {
            id: docElements.id,
            user_info: {},
          }
        );
        post_list.push(post);
      });
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(action);
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
