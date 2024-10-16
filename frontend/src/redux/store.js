import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice'; // Import your actual user reducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Use the correct reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
