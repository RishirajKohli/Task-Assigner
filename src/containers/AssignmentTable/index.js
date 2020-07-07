import React, { useState, useEffect, memo } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import "./assignmentTable.scss";
import {
  CircularProgress,
  Table,
  Grid,
  Typography,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
  Divider,
  Popover,
  Button,
} from "@material-ui/core";
import { fetchEmployees, saveEmployeeAssignment } from "./actions";
import PoppedContent from "../PoppedContent";

function AssignmentTable({
  isLoading,
  employees,
  error,
  fetchEmployees,
  saveEmployeeAssignment,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dateIndex, setDateIndex] = useState("");
  const [employeeIndex, setEmployeeIndex] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const handleClick = (dateIndex, employeeIndex, employeeName) => {
    return (event) => {
      setAnchorEl(event.currentTarget);
      setDateIndex(dateIndex);
      setEmployeeIndex(employeeIndex);
      setEmployeeName(employeeName);
    };
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <Grid container item justify="flex-end">
      {isLoading ? (
        <CircularProgress color="primary"></CircularProgress>
      ) : error ? (
        <Typography>Some Error Occurred</Typography>
      ) : (
        <>
          <Grid item xs={6}>
            <Typography variant="h6">Assign Tasks!</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={saveEmployeeAssignment}
            >
              Save
            </Button>
          </Grid>
          <TableContainer>
            <Table className="table">
              <TableHead>
                <TableRow className="headers">
                  <TableCell>Employee Name</TableCell>
                  <TableCell>20 April</TableCell>
                  <TableCell> 21 April</TableCell>
                  <TableCell> 22 April</TableCell>
                  <TableCell> 23 April</TableCell>

                  <TableCell> 24 April</TableCell>
                  <TableCell> 25 April</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee, employeeIndex) => {
                  return (
                    <TableRow key={employeeIndex} className="table-row">
                      <TableCell component="th" scope="row">
                        {employee.Name}
                      </TableCell>
                      {employee.workOrders.map((workOrder, index) => {
                        return (
                          <TableCell
                            key={index}
                            onClick={handleClick(
                              index,
                              employeeIndex,
                              employee.Name
                            )}
                          >
                            {workOrder && (
                              <Paper className="task">
                                {workOrder.workOrderName}
                                <Divider variant="middle"></Divider>
                                {workOrder.jobName}
                              </Paper>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            style={{ minHeight: 500, minWidth: 600 }}
          >
            <PoppedContent
              handleClose={handleClose}
              dateIndex={dateIndex}
              employeeIndex={employeeIndex}
              employeeName={employeeName}
            ></PoppedContent>
          </Popover>
        </>
      )}
    </Grid>
  );
}
function mapStateToProps(state) {
  return {
    isLoading: state.assignmentTable.isLoading,
    employees: state.assignmentTable.employees,
    error: state.assignmentTable.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    saveEmployeeAssignment: () => dispatch(saveEmployeeAssignment()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignmentTable);
export default memo(withConnect);
