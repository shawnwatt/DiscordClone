import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../counter/userSlice";
import appReducer from "../counter/appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
