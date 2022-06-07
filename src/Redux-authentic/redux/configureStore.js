import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
// redux-thunk는 리덕스에서 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어입니다.
// 이 미들웨어를 사용하면 액션 객체가 아닌 함수를 디스패치 할 수 있습니다.
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import User from './modules/user';
import Post from './modules/post';
import Image from './modules/image';
import Comment from './modules/comment';

export const history = createBrowserHistory(); // 우리의 history 객체 생성함.

const rootReducer = combineReducers({
  // 우리가 user.js에서 만든 reducer을 combineReducers()를 이용해 user에 넣었음.
  user: User,
  post: Post,
  image: Image,
  comment: Comment,
  router: connectRouter(history), // redux에 history를 넣기 : 자신이 만든 history와 router가 연결됨.
  // 즉 자신의 브라우저 history 정보가 store에 저장됨.
});

//! 미들웨어 작업
//, redux-thunk라이브러리를 이용해 내가 사용하고 싶은 미들웨어를 모두 넣으려는 곳.
//, reducer을 실행하기 전에 action이 실행되고 reducer의 실행 전 사이에 middlewares의 thunk를 쓰면 비동기를 동작할 수 있는 단계를 설정할 수 있다.
//' 실행 : action -> 비동기 작업(외부 api작업 다녀옴, setTimeOut() 등. ) middlewares -> reducer을 태움.
const middlewares = [thunk.withExtraArgument({ history: history })]; //? 로그인후 특정 페이지로 이동 = history
//, history로 움직이는 것도 middlewares thunk에서 한다.
//' withExtraArgument : thunk에 내장되어있는 함수. -> 다른 인수를 더 넘겨주도록 함.
//* 요약 : action 생성실행됨 -> 비동기 다녀오고 .then으로 history를 받아서 사용 가능 -> reudcer() 실행됨.

//! 지금 무슨 환경인지 알려준다.(개발환경, 프로덕션(배포)환경 ..)
const env = process.env.NODE_ENV;

if (env === 'development') {
  // env가 개발환경(development)일 때.
  const { logger } = require('redux-logger'); // require()은 import보다 정보 공유도가 더 낮은 패키지를 가져올때 사용.
  middlewares.push(logger); // [thunk, logger...]
}

//! redux-devtool
const composeEnhancers =
  // 지금 환경이 브라우저가 아닐때도 있다. 브라우저가 아니더라도 Javascript 엔진은 동작한다, 브라우저가 아닐때는 window라는 객체가 없기 때문에
  // typeof window === "object"로 설정해서 브라우저인 경우만 실행하도록.
  //? &&
  // window.__REDUX__DEVTOOLS_.. <- Redux-devtool이 설치 되어 있는가에 대한 여부.
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

//! 미들웨어(middlewares) 묶기
// 스토어에 미들웨어를 적용 할 때에는 applyMiddleware 라는 함수를 사용합니다.
// redux라이브러리의 ApplyMiddleware()로 지금까지 있는 middlewares를 사용하겠다 라는 설정으로 composeEnhancers()로 한번 묶어줘서 사용해야한다.
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//! root-reducer + 미들웨어 = store
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
