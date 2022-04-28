import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  user_info: {
    user_name: 'wonkeun',
    user_profile:
      'https://www.notion.so/f7be487bc3aa4842aaab051497fba7cf#500e914360c046c1b1b68c2b26142f0f',
  },
  image_url:
    'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160103_119%2Fyukkie_14518066357879h3ul_JPEG%2FIMG_1752.jpg&type=sc960_832',
  contents: '괌 여행 가고싶다',
  comment_cnt: 10,
  insert_dt: '2021-12-29 15:00:00',
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
};

export { actionCreators };
