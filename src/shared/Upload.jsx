import React, { useRef } from 'react';
import { Button } from '../Redux-authentic/elements/ImportBridge';
import { storage } from './Firebase';

const Upload = () => {
  const fileInput = useRef();

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((doc) => {
      console.log(doc);
    });
  };

  const changeFile = (e) => {
    console.log(e.target.files);
    console.log(fileInput.current.files[0]);
  };
  return (
    <>
      <input type="file" onChange={changeFile} ref={fileInput} />
      <Button _onClick={uploadFB} text="업로드하기"></Button>
    </>
  );
};

export default Upload;
