import React from 'react';

import styled from 'styled-components/macro';

const Button = (props) => {
  const { text, _onClick } = props;
  return (
    <React.Fragment>
      <ElButton onClick={_onClick}>{text}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: '',
  _onClick: () => {},
  bg: '#000000',
};

const ElButton = styled.button.attrs({
  type: 'button',
  alt: '기능 동작 버튼',
})`
  width: 100%;
  background-color: #212121;
  color: #ffffff;
  padding: 15px 0px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

export default Button;
