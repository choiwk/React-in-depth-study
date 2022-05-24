import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const Search = () => {
  const [box, setBox] = useState('');
  const debounce = _.debounce((e) => {
    //? debounce :
    //? 입력한 글자마다 바로 이벤트가 호출되는 것이 아닌 설정한 시간 안에 글을 입력하면 호출을 멈추고,
    //? 설정한 시간보다 늦게 글을 입력하면 지금까지 입력했던 글을 호출시킨다.
  }, 1000);
  const keyPress = useCallback(debounce, []);

  const inputChange = (e) => {
    setBox(e.target.value);
    keyPress(e);
  };

  const throttle = _.throttle((e) => {
    //? 일정 시간 동안 일어난 이벤트를 모아서 주기적으로 1번씩 실행해준다.
    console.log(e.target.value);
  });

  return (
    <div>
      <input type="text" onChange={inputChange} />
      <div>{box}</div>
    </div>
  );
};

export default Search;
