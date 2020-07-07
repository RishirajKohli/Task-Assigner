import { takeLatest, put, delay } from "redux-saga/effects";
import {
  fetchWorkOrdersInit,
  fetchWorkOrdersSuccess,
  fetchWorkOrdersError,
} from "./actions";
import { FETCH_WORK_ORDERS } from "./constants";

export function* fetchWorkOrdersSaga(action) {
  yield put(fetchWorkOrdersInit());
  try {
    // yield delay(2000);
    let response = yield fetch("getWorkOrders.json").then((response) =>
      response.json()
    );
    yield put(fetchWorkOrdersSuccess(response.job));
  } catch (err) {
    yield put(fetchWorkOrdersError());
  }
}

export default function* workOrderList() {
  yield takeLatest(FETCH_WORK_ORDERS, fetchWorkOrdersSaga);
}
