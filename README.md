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
