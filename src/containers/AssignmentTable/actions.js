import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_INIT,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_ERROR,
  UPDATE_EMPLOYEE_ASSIGMENT,
  SAVE_EMP_ASSIGNMT,
} from "./constants";

export function fetchEmployees() {
  return {
    type: FETCH_EMPLOYEES,
  };
}
export function fetchEmployeessInit() {
  return { type: FETCH_EMPLOYEES_INIT };
}
export function fetchEmployeesSuccess(employees) {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    employees,
  };
}
export function fetchEmployesError() {
  return {
    type: FETCH_EMPLOYEES_ERROR,
  };
}
export function updateEmployeeAssignment(dateIndex, employeeIndex, workOrder) {
  return {
    type: UPDATE_EMPLOYEE_ASSIGMENT,
    dateIndex,
    employeeIndex,
    workOrder,
  };
}

export function saveEmployeeAssignment() {
  return {
    type: SAVE_EMP_ASSIGNMT,
  };
}
