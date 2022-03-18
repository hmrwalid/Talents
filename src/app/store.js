import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/reducers/AuthReducer';
import errorReducer from '../Redux/reducers/errorReducer';
import profileReducer from '../Redux/reducers/ProfilReducer'
export const store = configureStore({
  reducer: {
    auth : authReducer,
    profiles: profileReducer,
    errors: errorReducer
   
  },
});
