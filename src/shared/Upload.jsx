import React, { useRef } from 'react';
import { Button } from '../Redux-authentic/elements/ImportBridge';
import { storage } from './Firebase';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as imageActions } from '../Redux-authentic/redux/modules/image';

const Upload = () => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);

  const fileInput = useRef();

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file); //? readAsDataURL: base64로 인코딩합니다. 이미지를 다루는데 좋습니다.

    reader.onloadend = () => {
      console.log(reader);
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  return (
    <>
      <input
        type="file"
        ref={fileInput}
        disabled={is_uploading}
        onChange={selectFile}
      />
      <Button _onClick={uploadFB} text="업로드하기"></Button>
    </>
  );
};

export default Upload;
