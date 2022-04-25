import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { setCookie, deleteCookie } from '../../../shared/Cookie';
import { auth } from '../../../shared/Firebase';
import firebase from 'firebase/app';

//? actions
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//? action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//? initialState = default props
const initialState = {
  user: null, //항상 처음 로그인 상태는 없음 상태.
  is_login: false, //웹사이트 뜨자마자 로그인 상태 false
};

const signupFB = (id, pwd, userName) => {
  return function(dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .createUserWithEmailAndPassword(id, pwd)
        .then((user) => {
          auth.currentUser.updateProfile({
            displayName: userName,
          });
        })
        .then(() => {
          dispatch(
            setUser({
              userName: userName,
              id: id,
              userProfile: '',
            })
          );
          history.push('/');
        })
        .catch((error) => {
          alert(`error! : ${error}`);
        });
    });
  };
};

const loginFB = (id, pwd) => {
  return function(dispatch, getState, { history }) {
    auth
      .signInWithEmailAndPassword(id, pwd)
      .then((user) => {
        dispatch(
          setUser({
            userName: user.user.displayName,
            id: id,
            userProfile: '',
            uid: user.user.uid,
          })
        );
        history.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

//? reducer
export default handleActions(
  {
    //' reducer안에서 일어나는 작업의 불변성 유지 작업 = immer의 produce()
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => {
      produce(state, (draft) => {});
    },
  },
  initialState
);

//? action creator export
const actionCreators = {
  logOut,
  getUser,
  setUser,
  signupFB,
  loginFB,
};

export { actionCreators };
