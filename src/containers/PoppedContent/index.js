import React, { memo } from "react";
import { connect } from "react-redux";
import { calculateWorkOrders } from "./selectors";
import { Paper, Grid, Divider, Typography } from "@material-ui/core";
import { assignTask } from "../WorkOrderList/actions";
import { updateEmployeeAssignment } from "../AssignmentTable/actions";
function PoppedContent({ workOrders, assignTask }) {
  return (
    <div style={{ padding: 16 }}>
      {workOrders.length ? (
        workOrders.map((workOrder, index) => {
          return (
            <Paper
              key={index}
              className="task clickable"
              onClick={() => assignTask(workOrder)}
            >
              {workOrder.workOrderName}
              <Divider variant="middle"></Divider>
              {workOrder.jobName}
            </Paper>
          );
        })
      ) : (
        <Typography variant="body2">
          No Tasks available for this date
        </Typography>
      )}
    </div>
  );
}
const mapStateToProps = (state, { dateIndex }) => {
  return {
    workOrders: calculateWorkOrders(state, dateIndex),
  };
};
const mapDispatchToProps = (
  dispatch,
  { dateIndex, employeeIndex, employeeName, handleClose }
) => {
  return {
    assignTask: (workOrder) => {
      dispatch(assignTask(dateIndex, employeeName, workOrder));
      dispatch(updateEmployeeAssignment(dateIndex, employeeIndex, workOrder));

      handleClose();
    },
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(PoppedContent);
export default memo(withConnect);
