import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { firestore, storage } from '../../../shared/Firebase';
import { actionCreators as imageActions } from './image';
import moment from 'moment';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const LOADING = 'LOADING';

const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

const initialPost = {
  image_url:
    'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
  contents: '괌 여행 가고싶다',
  comment_cnt: 0,
  insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
};

const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log('게시물 정보가 없어요!');
      return;
    }

    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];
    const postDB = firestore.collection('post');

    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace('/');
        });

      return;
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, 'data_url');

      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            return url;
          })
          .then((url) => {
            postDB
              .doc(post_id)
              .update({ ...post, image_url: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, image_url: url }));
                history.replace('/');
              });
          })
          .catch((err) => {
            window.alert('앗! 이미지 업로드에 문제가 있어요!');
            console.log('앗! 이미지 업로드에 문제가 있어요!', err);
          });
      });
    }
  };
};
const addPostFB = (contents = '') => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.userName,
      user_id: _user.uid,
      user_profile: _user.userProfile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format('YYYY-MM-DD hh:mm:ss'),
    };

    const _image = getState().image.preview;

    const _upload = storage // 파이어베이스 파일 저장소에 전송하는 파일 네이밍 설정하기.
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, 'data_url');

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = {
                user_info,
                ..._post,
                id: doc.id,
                image_url: url,
              };
              dispatch(addPost(post));
              history.replace('/');
              dispatch(imageActions.setPreview(null));
              // 이미지를 선택할때 마다 preview에 파일 값이 들어가는데 최종적으로 null로 지워줌.
            })
            .catch((error) => {
              alert('post 게시글 작성을 실패했습니다', error);
            });
        })
        .catch((error) => {
          alert('이미지를 업로드 하는데 문제가 있습니다.', error);
        });
    });
  };
};

const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection('post');

    let _paging = getState().post.paging;

    if (_paging.start && !_paging.next) {
      alert('게시글의 정보가 없습니다.');
      return;
    }

    dispatch(loading(true));
    let query = postDB.orderBy('insert_dt', 'desc');
    console.log('일반', query);
    if (start) {
      query = query.startAt(start);
      console.log('start: ', query);
    }
    query
      .limit(size + 1)
      .get()
      .then((docs) => {
        let post_list = [];

        let paging = {
          start: docs.docs[0],
          next:
            docs.docs.length === size + 1
              ? docs.docs[docs.docs.length - 1]
              : null,
          size: size,
        };
        console.log('페이징 ::: ', paging.next);

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

        console.log('post_list.pop()', post_list.pop());
        dispatch(setPost(post_list, paging));
        console.log(post_list);
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        console.log('store에 담긴 post_list ::: ', action.payload.post_list);
        draft.paging = action.payload.paging;
        draft.is_loading = false;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (el) => el.id === action.payload.post_id
        );
        draft.list[idx] = {
          ...draft.list[idx],
          ...action.payload.post,
        };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
  editPostFB,
};

export { actionCreators };
