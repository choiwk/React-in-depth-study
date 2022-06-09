import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore } from '../../../shared/Firebase';
import 'moment';
import moment from 'moment';

const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const LOADING = 'LOADING';

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));

const addComment = createAction(ADD_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

const getCommentFB = (post_id = null) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      return;
    }
    const commentDB = firestore.collection('comment');

    commentDB
      .where('post_id', '==', post_id)
      .orderBy('insert_dt', 'desc')
      .get()
      .then((docs) => {
        let list = [];

        docs.forEach((el) => {
          console.log('✅', el.data());
          list.push({ ...el.data(), id: docs.id });
        });
        console.log(post_id, list);
        dispatch(setComment(post_id, list));
      })
      .catch((err) => {});
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // 방 만들어주기 : let data = {[post_id] : comment_list, ... }
        // [특정 게시물 페이지] : 댓글
        draft.list = [action.payload.post_id];
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [LOADING]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setComment,
  addComment,
  getCommentFB,
  loading,
};

export { actionCreators };
