import { call, put, takeLatest } from "redux-saga/effects";
import { getHomeAPI } from "./services/HomeAPI";
import { homeFailure, homeRequest, homeSuccess } from "./homeSlice";
import { AxiosError } from "axios";

function* handleGetHome(): Generator {
  try {
    const response = yield call(getHomeAPI);
    yield put(homeSuccess(response));
  } catch (error) {
    const errors = error as AxiosError;
    yield put(homeFailure(errors.message));
  }
}
export default function* homeSaga() {
  yield takeLatest(homeRequest.type, handleGetHome);
}
