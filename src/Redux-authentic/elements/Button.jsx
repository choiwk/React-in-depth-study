import React from 'react';

import styled from 'styled-components/macro';

const Button = (props) => {
  const { text, _onClick, is_float } = props;

  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      </>
    );
  }

  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: '',
  _onClick: () => {},
  is_float: false,
};

const ElButton = styled.button.attrs({
  type: 'button',
  alt: '기능 동작 버튼',
})`
  width: 100%;
  background-color: #212121;
  color: #fff;
  padding: 15px 0px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

const FloatButton = styled.button.attrs({
  type: 'button',
  alt: '기능 동작 버튼',
})`
  position: fixed;
  width: 50px;
  height: 50px;
  right: 20%;
  bottom: 30px;
  background-color: #ffa500;
  color: #fff;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default Button;
