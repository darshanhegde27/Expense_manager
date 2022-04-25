import { createSlice } from "@reduxjs/toolkit";
import { SignIn } from "../../Redux/Services/HomeCalls";
import { SignUp } from "../../Redux/Services/HomeCalls";

export const HomeDataSlice = createSlice({
  name: "Homedata",
  initialState: {
    user: "hi",
    error: "",
  },
  reducers: {
    Sighn_up: async(state,action) => {
      let l=await SignUp(action.payload[0],action.payload[1])
      console.log(l)
      
    },

    Sighn_In: (emailP, passwordP, state) => {
      state.user = SignIn(emailP, passwordP)[0];
      state.error = SignIn(emailP, passwordP)[1];
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  Sighn_In,Sighn_up
} = HomeDataSlice.actions;

export default HomeDataSlice.reducer;
