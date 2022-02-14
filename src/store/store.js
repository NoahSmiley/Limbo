import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import * as cryptico from "cryptico-js/dist/cryptico.browser.js";
import { create } from "yup/lib/array";

const navbar = createSlice({
  name: "navbar",
  initialState: {
    navType: "login",
    trustedUser: "https://noahnode-62cc0-default-rtdb.firebaseio.com/.json",
    blockChain: "initial",
  },
  reducers: {
    changeNav(state, action) {
      state.navType = action.payload;
    },

    setBlockChain(state, action) {
      state.blockChain = action.payload;
    },

    initDatabase(state, action) {
      const Bits = 512;

      const PrivateKey = cryptico.generateRSAKey(action.payload.password, Bits);
      const PublicKey = cryptico.publicKeyString(PrivateKey);

      const PlainText =
        "Matt, I need you to help me with my Starcraft strategy.";
      const EncryptionResult = cryptico.encrypt(PlainText, PublicKey);

      console.log("encrypted message", EncryptionResult);

      const DecryptionResult = cryptico.decrypt(
        EncryptionResult.cipher,
        PrivateKey
      );
      console.log("Decrypted Message", DecryptionResult);

      const postData = async () => {
        const response = await fetch(`${action.payload.api}.json`, {
          method: "PUT",
          body: JSON.stringify({
            username: action.payload.username,
            limbo: ["create"],
            publicKey: PublicKey,
            trustedUsers: state.trustedUsers,
            blockChain: state.blockChain,
          }),
        });
      };

      // const postData = async () => {
      //   const response = await fetch(
      //     "https://noahnode-62cc0-default-rtdb.firebaseio.com/.json",
      //     {
      //       method: "PUT",
      //       body: JSON.stringify({
      //         blockChain: [{ proofOfWork: 0 }],
      //         limbo: ["empty"],
      //       }),
      //     }
      //   );
      {
        state.blockChain !== [] && postData();
      }
    },
  },
});
const loading = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const getBlockChain = (api) => {
  return async (dispatch) => {
    const getData = async () => {
      const blockChainRequest = await fetch(api);
      const trustedData = await blockChainRequest.json();
      const blockChain = trustedData.blockChain;
      dispatch(navBarActions.setBlockChain(blockChain));
    };
    getData();
  };
};

const store = configureStore({
  reducer: { navbar: navbar.reducer, loading: loading.reducer },
});

export const navBarActions = navbar.actions;
export const loadingActions = loading.actions;

export default store;
