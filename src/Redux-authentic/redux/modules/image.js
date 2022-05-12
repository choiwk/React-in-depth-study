import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { storage } from '../../../shared/Firebase';

const UPLOADING = 'UPLOADING';
const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

const initialState = {
  image_url: '',
  uploading: false,
};

export default handleActions(
  {
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        state.draft;
      }),
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        state.draft;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
};

export { actionCreators };
