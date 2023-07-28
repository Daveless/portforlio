import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language-slice";

export const store = configureStore({
  reducer: {
    languageReducer,
  },
});
