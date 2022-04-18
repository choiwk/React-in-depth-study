import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//action creators
//TODO: redux-actions 라이브러리의 createAction을 사용하기 전.
//? const logIn = (user) => {
//?  return {
//?   type: LOG_IN,
//?     user,
//?   };
//? };

//TODO: createAction을 사용해서 action 생성해주기.
const logIn = createAction(LOG_IN, (user) => ({ user }));

//!
//TODO: redux-actions 라이브러리의 handleActions 사용하기 전.
//? const reducer = (state = {}, action = {}) => {
//?   switch (action.type) {
//?     case LOG_IN:
//?       state.user = action.user;
//?     case LOG_OUT:
//?       return;
//?     case GET_USER:
//?       return;
//?   }
//? };

//TODO: handleActions을 사용해서 reducer 생성해주기.
const reducer = handleActions({ [LOG_IN]: (state, action) => {} }, {});
