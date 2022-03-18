import { createSlice } from "@reduxjs/toolkit";
import _default from "antd/lib/time-picker";
import sha256 from "crypto-js/sha256";
import { useEffect } from "react";

const hashSlice = createSlice({
  name: "hashSlice",
  initialState: {
    transaction: {},
    hashValue: null,
    counter: 0,
    solved: false,
    blockList: [],
    miningStatus: "Standby",
    hashRate: {status:"",rate:10},
  },
  reducers: {
    setHashValue(state, action) {
      state.hashValue = action.payload;
    },
    setHashRate(state, action) {
      if (state.hashRate.rate>action.payload){
        state.hashRate = {rate:action.payload,status:"dec"};
      } 
      if (state.hashRate.rate<action.payload){
        state.hashRate = {rate:action.payload,status:"inc"};
      } 
      else{
        state.hashRate = {rate:action.payload,status:state.hashRate.status};
      } 
      
    },
    setMiningStatus(state, action) {
      state.miningStatus = action.payload;
    },
    setBlockList(state, action) {
      state.blockList = action.payload;
    },
    setSolved(state, action) {
      state.solved = action.payload;
    },
    mine(state, action) {
      const hashHelper = (hashValue) => {
        let strings = [];
        for (let x in hashValue) {
          if (hashValue[x] >= 0) {
            strings.push(hashValue[x].toString(2).padStart(32, "0"));
          } else {
            strings.push(hashValue[x].toString(2).padStart(32, "0"));
          }
        }
        const zeros = "".padStart(Number(9), "0");
        if (strings[0].slice(0, 9) === zeros) {
          console.log("solved");
          state.solved = true;
        }
      };
      if (action.payload != null) {
        state.transaction = action.payload;
        state.hashValue = sha256(`${state.transaction}${state.counter}`).words;
        hashHelper(state.hashValue);
        state.counter = state.counter += 1;
      }
    },
  },
});
export default hashSlice;
export const hashSliceActions = hashSlice.actions;
