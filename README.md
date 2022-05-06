### Redux 준비하기

- reudx 미들웨어 thunk와 redux-logger 라이브러리를 이용하여 reducer이 실행되기 전과 후를 log로 결과값을 쉽게 보기.
  <img width="549" alt="스크린샷 2022-05-04 오후 3 59 55" src="https://user-images.githubusercontent.com/77766718/166635680-59b65e7e-e018-419f-b1e2-8fb212c5fcb2.png">
- redux store에 미들웨어 적용하기 위해 redux 라이브러리 applyMiddleware 함수 이용하기.
- user및 post 모듈 : redux-actions와 immer를 사용해서 action과 action 생성 함수, reducer 만들기.

### 페이지 UI 구현하기.

1. 메인페이지
2. 헤더
3. 로그인/회원가입 페이지 만들기
   - input 최소 단위 컴포넌트를 elements 파일 안에 생성해서 만들어보기.
   - button 태그

 <br/>

### 최소단위 elements 컴포넌트

- Input : 아이디,비밀번호에 대한 label, input안에 들어가는 placeholder 등을 props로 받아서 쓰게 해주기.
- Button : onClick() 하면 실행, button 안에 텍스트 등을 props로 받아서 쓰게 해주기.
  - props로 받아서 버튼 넓이가 100% 일지 아닐지에 대해 두가지로 나눠 써주기.
  - 버튼 활성화 : input안에 모든 값과 조건이 true일때 버튼 클릭할 수 있도록.
- Grid : layout을 일관성 있게 배치 작업해주기.
- Image : 이미지의 모양, 크기, url 속성 등을 결정하는 컴포넌트.
- Text : Typography (텍스트 굵기, 색상, 사이즈, 여백 값) props 설정하기.

### 중간단위 pages 컴포넌트

- 로그인
- 회원가입
- 포스트(게시물 정보)

### Firebase의 authentication 기능을 사용해 회원가입과 로그인 기능 구현하기.

- 로그인

1. 웹 저장소 토큰 쿠키 생성 및 삭제 해보기.
2. 헤더 분기 및 리덕스 사용하기.
3. 유저 모듈 만들기
4. 리덕스 스토어 만들기
5. 스토어 주입하기

- 회원가입

1. firebase.js에 만들어둔 auth 가져오기
2. 리덕스에서 signupFB 함수 만들기
3. auth.createUserWithEmailAndPassword()로 가입 시키기
4. Signup 컴포넌트에서 signupFB를 호출하기.
5. 가입한 후, display_name 바로 업데이트하기
6. 사용자 정보 업데이트 후에 메인 페이지로 이동하기

```js
//firebase v8

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
..code
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
```

### 파이어베이스 FireStore 데이터베이스 작성 후 연동하기.

```js
import 'firebase/firestore';

const firebaseConfig = { ... }

firebase.initializeApp(firebaseConfig);
...
const firestore = firebase.firestore();

export { auth, apiKey, firestore };
```
