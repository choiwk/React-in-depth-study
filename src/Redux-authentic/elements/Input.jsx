import React from 'react';
import styled from 'styled-components/macro';
import { Text, Grid } from './ImportBridge';

const Input = (props) => {
  const { type, label, placeholder, _onChange, multiLine, value, is_submit } =
    props;

  const onSubmit = (e) => {};

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
      {is_submit ? (
        <ElInput
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
      ) : (
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      )}
    </Grid>
  );
};

Input.defaultProps = {
  multiLine: false,
  type: '',
  label: '',
  placeholder: '',
  is_submit: false,
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
