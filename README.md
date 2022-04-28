1. 헤더 만들기

2. 로그인/회원가입 페이지 만들기
   - input 최소 단위 컴포넌트를 elements 파일 안에 생성해서 만들어보기.
   - button 태그

 <br/>

### 최소단위 elements 파일

- Input.js : 아이디,비밀번호에 대한 label, input안에 들어가는 placeholder 등을 props로 받아서 쓰게 해주기.
- button.js : onClick() 하면 실행, button 안에 텍스트 등을 props로 받아서 쓰게 해주기.
  - props로 받아서 버튼 넓이가 100% 일지 아닐지에 대해 두가지로 나눠 써주기.
  - 버튼 활성화 : input안에 모든 값과 조건이 true일때 버튼 클릭할 수 있도록.

### 중간단위 pages 파일

- 로그인
- 회원가입

### 로그인/회원가입 firebase를 이용하여 유저 관리하기.

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
