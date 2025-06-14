import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slices/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const Reducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: Reducer,
  },
});

export const persistor = persistStore(store);
