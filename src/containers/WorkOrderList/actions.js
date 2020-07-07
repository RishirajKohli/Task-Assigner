import {
  FETCH_WORK_ORDERS,
  FETCH_WORK_ORDERS_INIT,
  FETCH_WORK_ORDERS_SUCCESS,
  FETCH_WORK_ORDERS_ERROR,
  ASSIGN_TASK,
} from "./constants";

export function fetchWorkOrders() {
  return {
    type: FETCH_WORK_ORDERS,
  };
}
export function fetchWorkOrdersInit() {
  return {
    type: FETCH_WORK_ORDERS_INIT,
  };
}
export function fetchWorkOrdersSuccess(jobs) {
  return {
    type: FETCH_WORK_ORDERS_SUCCESS,
    jobs,
  };
}
export function fetchWorkOrdersError() {
  return {
    type: FETCH_WORK_ORDERS_ERROR,
  };
}
export function assignTask(dateIndex, employeeName, workOrder) {
  return {
    type: ASSIGN_TASK,
    dateIndex,
    employeeName,
    workOrder,
  };
}
