import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Home } from "../../types/homeTypes";

interface DetailState {
  product: Home | null;
  loading: boolean;
  error: string | null;
}
const initialState: DetailState = {
  product: null,
  loading: false,
  error: null
};
const DetailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getDetailRequest(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    getDetailSuccess(state, action: PayloadAction<Home>) {
      state.loading = false;
      state.product = action.payload;
    },
    getDetailFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export const { getDetailRequest, getDetailSuccess, getDetailFailure } =
  DetailSlice.actions;
export default DetailSlice.reducer;
