import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState = default props
const initialState = {
  user: null, //항상 처음 로그인 상태는 없음 상태.
  is_login: false, //웹사이트 뜨자마자 로그인 상태 false
};

//reducer
export default handleActions({
  [LOG_IN]: (state, action) => produce(state, (draft) => {}),
  //TODO: reducer안에서 일어나는 작업의 불변성 유지 작업 = immer의 produce()
  [LOG_OUT]: (state, action) => {},
  [GET_USER]: (state, action) => {},
});
