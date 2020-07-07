import { combineReducers } from "redux";

import { assignmentTable } from "./containers/AssignmentTable/reducer";
import { workOrderList } from "./containers/WorkOrderList/reducer";

export default combineReducers({
  assignmentTable,
  workOrderList,
});
