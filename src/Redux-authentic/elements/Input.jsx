import React from 'react';
import styled from 'styled-components/macro';
import { Text, Grid } from './ImportBridge';

const Input = (props) => {
  const { type, label, placeholder, _onChange, multiLine, value } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextArea
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
      </Grid>
    );
  }

  return (
    <Grid>
      <Text margin="0px">{label}</Text>
      <ElInput
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        value={value}
      />
    </Grid>
  );
};

Input.defaultProps = {
  multiLine: false,
  type: '',
  label: '',
  placeholder: '',
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElTextArea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
