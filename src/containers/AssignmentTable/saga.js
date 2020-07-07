import { takeLatest, put, delay, select } from "redux-saga/effects";
import AssignmentTable from ".";
import { FETCH_EMPLOYEES, SAVE_EMP_ASSIGNMT } from "./constants";
import {
  fetchEmployeesSuccess,
  fetchEmployesError,
  fetchEmployeessInit,
} from "./actions";
import { selectEmployeesState } from "./selectors";

export function* fetchEmployeesSaga(action) {
  yield put(fetchEmployeessInit());
  try {
    // delay(2000);
    let response = yield fetch("getEmployees.json").then((response) =>
      response.json()
    );
    yield put(fetchEmployeesSuccess(response.Employess));
  } catch (err) {
    yield put(fetchEmployesError());
  }
}

export function* saveEmployeeAssignmentSaga(action) {
  let employeesState = yield select(selectEmployeesState);

  yield fetch("postWorkOrders.json", {
    method: "POST",
    body: JSON.stringify({ job: employeesState }),
  });
}

export default function* assignmentTable() {
  yield takeLatest(FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeLatest(SAVE_EMP_ASSIGNMT, saveEmployeeAssignmentSaga);
}
