import React from 'react';
import styled from 'styled-components/macro';
import { Text, Grid } from './ImportBridge';

const Input = (props) => {
  const { type, label, placeholder, _onChange } = props;

  return (
    <React.Fragment>
      <Grid></Grid>
      <Text margin="0px">{label}</Text>
      <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
    </React.Fragment>
  );
};

Input.defaultProps = {
  type: '',
  label: '',
  placeholder: '텍스트를 입력해주세요.',
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
