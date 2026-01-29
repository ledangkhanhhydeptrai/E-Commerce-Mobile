import { call, put, takeLatest } from "redux-saga/effects";
import { getDetailAPI } from "./service/DetailAPI";
import { PayloadAction } from "@reduxjs/toolkit";
import { Home } from "../../types/homeTypes";
import {
  getDetailFailure,
  getDetailRequest,
  getDetailSuccess
} from "./detailSlice";
import { AxiosError } from "axios";

function* handleGetDetail(action: PayloadAction<string>): Generator {
  try {
    const id = action.payload;
    const response = yield call(getDetailAPI, id);
    yield put(getDetailSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(getDetailFailure(errors.message));
  }
}
export default function* detailSaga() {
  yield takeLatest(getDetailRequest.type, handleGetDetail);
}
