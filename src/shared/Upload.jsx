import React, { useRef } from 'react';
import { Button } from '../Redux-authentic/elements/ImportBridge';
import { storage } from './Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as imageActions } from '../Redux-authentic/redux/modules/image';

const Upload = () => {
  const dispatch = useDispatch();

  const fileInput = useRef();

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  return (
    <>
      <input type="file" ref={fileInput} />
      <Button _onClick={uploadFB} text="업로드하기"></Button>
    </>
  );
};

export default Upload;
