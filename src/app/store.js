import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/reducers/AuthReducer';
import errorReducer from '../Redux/reducers/errorReducer';
import userReducer from '../Redux/reducers/ProfilReducer'
import { editReducer } from '../Redux/reducers/CreateProfileReducer';
export const store = configureStore({
  reducer: {
    auth : authReducer,
    profiles: userReducer,
    errors: errorReducer,
    editReducer:editReducer
   
  },
});
