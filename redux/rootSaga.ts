import { all } from "redux-saga/effects";
import homeSaga from "../features/home/homeSaga";
import detailSaga from "../features/detail/detailSaga";

export default function* rootSaga() {
  yield all([homeSaga(), detailSaga()]);
}
