import React, { useRef } from 'react';
import { Button } from '../Redux-authentic/elements/ImportBridge';

const Upload = () => {
  const fileInput = useRef();

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    console.log(image);
  };

  const changeFile = (e) => {
    console.log(e);
    console.log(e.target);

    console.log(e.target.files);
    console.log(fileInput.current.files[0]);
  };
  return (
    <>
      <input type="file" onChange={changeFile} ref={fileInput} />
      <Button _onClick={uploadFB}></Button>
    </>
  );
};

export default Upload;
