import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/reducers/AuthReducer';
import errorReducer from '../Redux/reducers/errorReducer';
import profileReducer from '../Redux/reducers/ProfilReducer';
import alertReducer from "../Redux/reducers/alertReducer"
import postReducer from '../Redux/reducers/PostReducer'
import uploadFileReducer from "../Redux/reducers/uploadFileReducer"
export const store = configureStore({
  reducer: {
    auth : authReducer,
    profile: profileReducer,
    errors: errorReducer,
    alert: alertReducer,
    post : postReducer,
    uploadFile : uploadFileReducer
  },
});
