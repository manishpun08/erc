import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subCategoryId: "",
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    setSubCategoryId: (state, action) => {
      state.subCategoryId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSubCategoryId } = chatSlice.actions;

export default chatSlice.reducer;
