import { createSlice } from '@reduxjs/toolkit';
import { SignIn } from '../../Redux/Services/HomeCalls';
import { SignUp } from '../../Redux/Services/HomeCalls';

export const HomeDataSlice = createSlice({
  name: 'Homedata',
  initialState: {
    user: 'hi',
    error: '',
    value: 0
  },
  reducers: {
    Sighn_up: (emailP, passwordP, state) => {
      state.user = SignUp(emailP, passwordP)[0];
      state.error = SignUp(emailP, passwordP)[1];
    },

    Sighn_In: (emailP, passwordP, state) => {
      state.user = SignIn(emailP, passwordP)[0];
      state.error = SignIn(emailP, passwordP)[1];
    },
  },
});

// Action creators are generated for each case reducer function
export const { Sighn_up, Sign_In } = HomeDataSlice.actions;
export const HomeData = (state) => state.HomeData.value;
export default HomeDataSlice.reducer;
