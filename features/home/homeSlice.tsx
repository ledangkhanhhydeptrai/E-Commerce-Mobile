import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Home } from "../../types/homeTypes";

interface HomeState {
  data: Home[];
  loading: boolean;
  error: string | null;
}
const initialState: HomeState = {
  data: [],
  loading: false,
  error: null
};
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeRequest(state) {
      state.loading = true;
      state.error = null;
    },
    homeSuccess(state, action: PayloadAction<Home[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    homeFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { homeRequest, homeSuccess, homeFailure } = homeSlice.actions;
export default homeSlice.reducer;
