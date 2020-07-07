import {
  FETCH_WORK_ORDERS_INIT,
  FETCH_WORK_ORDERS_SUCCESS,
  FETCH_WORK_ORDERS_ERROR,
  ASSIGN_TASK,
} from "./constants";
import { useDebugValue } from "react";

const initialState = {
  isLoading: true,
  jobs: [],
  error: false,
};
export function workOrderList(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORK_ORDERS_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WORK_ORDERS_SUCCESS:
      let temp = action.jobs;
      temp = temp.map((job) => {
        let mappedWorkOrders = [null, null, null, null, null, null];
        job.workorders.forEach((workOrder, index) => {
          mappedWorkOrders[new Date(workOrder.Date).getDate() % 20] =
            workOrder.name;
        });
        return {
          jobName: job.jobname,
          workOrders: mappedWorkOrders,
        };
      });

      return {
        ...state,
        isLoading: false,
        jobsAssigned: action.jobs,
        jobs: temp,
        error: false,
      };
    case FETCH_WORK_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ASSIGN_TASK:
      let temp1;
      let i;
      for (i = 0; i < state.jobs.length; i++) {
        if (state.jobs[i].jobName === action.workOrder.jobName) {
          temp1 = { ...state.jobs[i] };
          break;
        }
      }
      temp1.workOrders[action.dateIndex] = null;
      let jobs = [...state.jobs];
      jobs[i] = temp1;

      // updating orginalJobs for POST api
      let temp2;
      for (i = 0; i < state.jobsAssigned.length; i++) {
        if (state.jobsAssigned[i].jobname === action.workOrder.jobName) {
          temp2 = { ...state.jobsAssigned[i] };
          break;
        }
      }
      let j;
      let temp3;
      for (j = 0; j < temp2.workorders.length; j++) {
        if (
          new Date(temp2.workorders[j].Date).getDate() % 20 ==
          action.dateIndex
        ) {
          temp3 = { ...temp2.workorders[j] };
          break;
        }
      }
      temp3.Employee = action.employeeName;
      let jobsAssigned = [...state.jobsAssigned];
      jobsAssigned[i].workorders[j] = temp3;
      return {
        ...state,
        jobs,
        jobsAssigned,
      };

    default:
      return state;
  }
}
