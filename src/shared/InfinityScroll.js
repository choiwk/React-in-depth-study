import React, { useEffect } from 'react';
import _ from 'lodash';

const InfinityScroll = (props) => {
  const { children, callNext, is_next, is_loading } = props;
  return <>{props.children}</>;
};
// 처음 InfinityScroll 컴포넌트가 로드 되었을때 이벤트(event)를 달아주는 작업.
useEffect(() => {
  window.addEventListener('scroll', () => {}); // 이벤트 구독.

  return () => window.addEventListener('scroll', () => {}); // 이벤트 구독 해제(언마운트).
  //? cleanUp : 이 함수형 컴포넌트가 화면에서 사라질때 return 구문이 실행이 된다.
  //? 언마운트와 비슷하게 동작하게 된다.
}, []);

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  is_loading: false,
};

export default InfinityScroll;
