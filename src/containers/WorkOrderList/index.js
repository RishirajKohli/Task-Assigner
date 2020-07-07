import React, { useState, useEffect, memo } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
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
  Divider,
  Paper,
} from "@material-ui/core";
import { fetchWorkOrders } from "./actions";

function WorkOrderList({ isLoading, error, fetchWorkOrders, jobs }) {
  useEffect(() => {
    fetchWorkOrders();
  }, []);
  return (
    <Grid container item justify="center">
      {isLoading ? (
        <CircularProgress color="primary"></CircularProgress>
      ) : error ? (
        <Typography>Some Error Occurred</Typography>
      ) : (
        <TableContainer>
          <Table className="table">
            <TableBody>
              {jobs.map((job, index) => {
                return (
                  <TableRow key={index} className="table-row no-borders">
                    <TableCell></TableCell>

                    <TableCell>
                      {job.workOrders[0] && (
                        <Paper className="task">
                          {job.workOrders[0]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                    <TableCell>
                      {job.workOrders[1] && (
                        <Paper className="task">
                          {job.workOrders[1]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                    <TableCell>
                      {job.workOrders[2] && (
                        <Paper className="task">
                          {job.workOrders[2]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                    <TableCell>
                      {job.workOrders[3] && (
                        <Paper className="task">
                          {job.workOrders[3]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                    <TableCell>
                      {job.workOrders[4] && (
                        <Paper className="task">
                          {job.workOrders[4]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                    <TableCell>
                      {job.workOrders[5] && (
                        <Paper className="task">
                          {job.workOrders[5]}
                          <Divider variant="middle"></Divider>
                          {job.jobName}
                        </Paper>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}
function mapStateToProps(state) {
  return {
    isLoading: state.workOrderList.isLoading,
    jobs: state.workOrderList.jobs,
    error: state.workOrderList.error,
  };
}
function mapDispatchToProps(dispatch) {
  return { fetchWorkOrders: () => dispatch(fetchWorkOrders()) };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(memo, withConnect)(WorkOrderList);
