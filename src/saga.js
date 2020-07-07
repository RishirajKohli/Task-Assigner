import { fork } from "redux-saga/effects";
import assignmentTable from "./containers/AssignmentTable/saga";

export default function* rootSaga() {
  yield [fork(assignmentTable)];
}
