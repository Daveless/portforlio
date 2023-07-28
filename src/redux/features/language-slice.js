import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEng: true,
};

export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      return {
        isEng: !state.isEng,
      };
    },
  },
});

export default language.reducer;
export const { changeLanguage } = language.actions;
