import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import * as cryptico from "cryptico-js/dist/cryptico.browser.js";
import hashSlice from "./hashSlice";
const navbar = createSlice({
  name: "navbar",
  initialState: {
    navType: "login",
    trustedUsers: ["https://noahnode-62cc0-default-rtdb.firebaseio.com/"],
    blockChain: [{ pow: 0 }],
    transaction: {},
    api: "",
    limboFull: false,
    limbo: "",
    blockLength: 0,
    credits: null,
    modal: true,
    userName: "",
    messages: [],
  },
  reducers: {
    addMessage(state, action) {
      state.messages = [...state.messages, action.payload];
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    setAPI(state, action) {
      state.api = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
    addCredit(state, action) {
      state.credits = state.credits += 1;
      console.log("CALLED");
    },
    subCredit(state, action) {
      state.credits = state.credits -= 1;
    },
    setCredits(state, action) {
      state.credits = action.payload;
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
      if (state.trustedUsers.indexOf(state.api) !== -1) {
        state.limbo = action.payload;
      }
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
        const response = await fetch(`${state.trustedUsers[0]}limbo.json`, {
          method: "PUT",
          body: JSON.stringify(state.transaction),
        });
        const data = await response.json();
      };
      postData();
    },
    creditTransaction(state, action) {
      const postThree = async () => {
        const response = await fetch(`${state.api}credits.json`, {
          method: "PUT",
          body: JSON.stringify(state.credits),
        });
        console.log(state.credits);
        const data = await response.json();
      };
      postThree();
    },
    messageTransaction(state, action) {
      const postThree = async () => {
        const response = await fetch(`${state.trustedUsers[0]}messages.json`, {
          method: "POST",
          body: JSON.stringify(action.payload),
        });
        // const data = await response.json();
      };
      postThree();
    },
    updateMessages(state, action) {
      const postThree = async () => {
        const response = await fetch(`${action.payload.api}messages.json`, {
          method: "PUT",
          body: JSON.stringify(action.payload.messages),
        });
        const data = await response.json();
      };
      postThree();
    },
    blockChainTransaction(state, action) {
      const postData = async () => {
        const response = await fetch(
          `${state.trustedUsers[0]}blockChain.json`,
          {
            method: "POST",
            body: JSON.stringify(state.blockChain),
          }
        );
        const data = await response.json();
        
      };
      const postTwo = async () => {
        const response = await fetch(`${state.trustedUsers[0]}limbo.json`, {
          method: "PUT",
          body: JSON.stringify(state.limbo),
        });
        const data = await response.json();
        console.log("Pushed to LIMBO TRUSTED", data);
      };
      const postThree = async () => {
        const response = await fetch(`${state.trustedUsers[0]}credits.json`, {
          method: "PUT",
          body: JSON.stringify(state.credits),
        });
        const data = await response.json();
      };
      const postFour = async () => {
        const response = await fetch(`${state.trustedUsers[0]}messages.json`, {
          method: "PUT",
          body: JSON.stringify(state.messages),
        });
        const data = await response.json();
      };
      postData();
      postTwo();
      postThree();
      postFour();
    },

    initDatabase(state, action) {
      console.log(action.payload);
      const Bits = 512;
      const PrivateKey = cryptico.generateRSAKey(action.payload.password, Bits);
      const PublicKey = cryptico.publicKeyString(PrivateKey);

      // const PlainText =
      //   "Matt, I need you to help me with my Starcraft strategy.";
      // const EncryptionResult = cryptico.encrypt(PlainText, PublicKey);

      // const DecryptionResult = cryptico.decrypt(
      //   EncryptionResult.cipher,
      //   PrivateKey
      // );

      state.transaction = {
        username: action.payload.username,
        publicKey: PublicKey,
        action: "Account Creation",
      };
      state.api = action.payload.api;
      console.log("HERE IN INIT" + action.payload.api);
      const postInit = async () => {
        const response = await fetch(`${action.payload.api}.json`, {
          method: "PUT",
          body: JSON.stringify({
            username: action.payload.username,
            limbo: [],
            publicKey: PublicKey,
            trustedUser: state.trustedUser,
            blockChain: state.blockChain,
            credits: 25,
            messages: "",
          }),
        });
        const data = await response.json();
        console.log(data);
      };

      postInit();
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
      const response = await fetch(`${api}blockChain.json`);
      const response2 = await fetch(`${api}messages.json`);
      const data = await response.json();
      const data2 = await response2.json();
      dispatch(navBarActions.setBlockChain(data));
      dispatch(navBarActions.setMessages(data2));
    };
    await getData();
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
