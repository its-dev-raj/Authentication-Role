import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const Reducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
    auth: Reducer,
  },
});

export const persistor = persistStore(store);
