import { createSlice } from "@reduxjs/toolkit";
import { SignIn } from "../../Redux/Services/HomeCalls";
import { SignUp } from "../../Redux/Services/HomeCalls";

export const HomeDataSlice = createSlice({
  name: "Homedata",
  initialState: {
    user: "",
    error: "",
  },
  reducers: {
    Sighn_up:(state,msg) => {
      
      if(msg.payload.error!=null)
      {
        state.error=msg.payload.error.message;
        
      }
      
     //console.warn(msg.payload.user.email)
     if(msg.payload.user!=null)
     {
       state.user=msg.payload.user.email;
       state.error="";
     }
      
    },
    setErr:(state)=>
    {
      state.error='';
    },

    Sighn_In: (emailP, passwordP, state) => {
      state.user = SignIn(emailP, passwordP)[0];
      state.error = SignIn(emailP, passwordP)[1];
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  Sighn_In,Sighn_up,setErr
} = HomeDataSlice.actions;

export default HomeDataSlice.reducer;
