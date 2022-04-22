import { configureStore } from "@reduxjs/toolkit";
import HomeDataSlice from "../../Redux/Reducers/Homepage_data";

export default configureStore({
  reducer: {
    Homedata: HomeDataSlice
  }
});
