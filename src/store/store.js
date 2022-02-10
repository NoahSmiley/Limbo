import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import* as CryptoJS from 'crypto-js'
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

const name = CryptoJS.SHA256("Noah Smiley")

console.log(name.toString(CryptoJS.enc.Base64))
export default store;
