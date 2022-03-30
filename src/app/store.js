import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/reducers/AuthReducer';
import errorReducer from '../Redux/reducers/errorReducer';
import profileReducer from '../Redux/reducers/Profil2.re';
import alertReducer from "../Redux/reducers/alertReducer"
export const store = configureStore({
  reducer: {
    auth : authReducer,
    profile: profileReducer,
    errors: errorReducer,
    alert: alertReducer,
  },
});
