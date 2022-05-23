import React from 'react';

import styled from 'styled-components/macro';

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;

  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
};

const ElButton = styled.button.attrs({
  type: 'button',
  alt: '기능 동작 버튼',
})`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
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
