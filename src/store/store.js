import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const navbar = createSlice({
  name: "navbar",
  initialState: {
    navType: "login",
  },
  reducers: {
    changeNav(state, action) {
      state.navType = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { navbar: navbar.reducer },
});

export const navBarActions = navbar.actions;

export default store;
