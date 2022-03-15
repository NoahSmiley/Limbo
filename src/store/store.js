import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import * as cryptico from "cryptico-js/dist/cryptico.browser.js";
import hashSlice from "./hashSlice";
const navbar = createSlice({
  name: "navbar",
  initialState: {
    navType: "login",
    trustedUser: "https://noahnode-62cc0-default-rtdb.firebaseio.com/",
    blockChain: [],
    transaction: {},
    api: "",
    limboFull: false,
    limbo: "",
  },
  reducers: {
    setAPI(state, action) {
      state.api = action.payload + ".json";
    },
    setTransaction(state, action) {
      state.transaction = action.payload;
    },
    changeNav(state, action) {
      state.navType = action.payload;
    },
    setBlockChain(state, action) {
      state.blockChain = action.payload;
    },
    setLimboFull(state, action) {
      state.limboFull = action.payload;
    },
    setLimbo(state, action) {
      state.limbo = action.payload;
      if (state.limbo !== "") {
        state.limboFull = true;
      }
    },
    checkLimbo(state, action) {
      if (state.limbo !== "") {
        state.limboFull = true;
        // console.log(state.limbo);
      }
    },
    limboTransaction(state, action) {
      const postData = async () => {
        const response = await fetch(`${state.trustedUser}/limbo.json`, {
          method: "PUT",
          body: JSON.stringify(state.transaction),
        });
        const data = await response.json();
      };
      postData();
    },
    blockChainTransaction(state, action) {
      const postData = async () => {
        const response = await fetch(`${state.trustedUser}/blockChain.json`, {
          method: "POST",
          body: JSON.stringify(state.blockChain),
        });
        const data = await response.json();
      };
      const postTwo = async () => {
        const response = await fetch(`${state.trustedUser}/limbo.json`, {
          method: "PUT",
          body: JSON.stringify(state.limbo),
        });
        const data = await response.json();
      };
      postData();
      postTwo();
    },
    initDatabase(state, action) {
      const Bits = 512;

      const PrivateKey = cryptico.generateRSAKey(action.payload.password, Bits);
      const PublicKey = cryptico.publicKeyString(PrivateKey);

      const PlainText =
        "Matt, I need you to help me with my Starcraft strategy.";
      const EncryptionResult = cryptico.encrypt(PlainText, PublicKey);

      const DecryptionResult = cryptico.decrypt(
        EncryptionResult.cipher,
        PrivateKey
      );

      state.transaction = {
        username: action.payload.username,
        publicKey: PublicKey,
        action: "signup",
      };
      state.api = action.payload.api;

      const postData = async () => {
        const response = await fetch(`${action.payload.api}.json`, {
          method: "PUT",
          body: JSON.stringify({
            username: action.payload.username,
            limbo: [],
            publicKey: PublicKey,
            trustedUsers: state.trustedUsers,
            blockChain: state.blockChain,
            credits: 0,
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
      // };

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
      const response = await fetch(api);
      const data = await response.json();
      // console.log(data);

      const dataObject = { limbo: data.limbo, blockChain: data.blockChain };
      if (dataObject.limbo) {
        dispatch(navBarActions.setLimbo(dataObject.limbo));
        dispatch(navBarActions.setLimboFull(true));
      }

      dispatch(navBarActions.setBlockChain(dataObject.blockChain));
    };
    await getData();
    console.log("hello");
  };
};

const store = configureStore({
  reducer: {
    navbar: navbar.reducer,
    loading: loading.reducer,
    hashSlice: hashSlice.reducer,
  },
});

export const navBarActions = navbar.actions;
export const loadingActions = loading.actions;

export default store;
