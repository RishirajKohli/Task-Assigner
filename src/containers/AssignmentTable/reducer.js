import {
  FETCH_EMPLOYEES_INIT,
  FETCH_EMPLOYEES_ERROR,
  FETCH_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEE_ASSIGMENT,
} from "./constants";

const initialState = {
  isLoading: true,
  employees: [],
  error: false,
};

export function assignmentTable(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEES_INIT:
      return { ...state, isLoading: true };
    case FETCH_EMPLOYEES_SUCCESS:
      let temp = action.employees;
      temp = temp.map((employee) => {
        let mappedWorkOrders = [null, null, null, null, null, null];
        return {
          Name: employee.Name,
          workOrders: mappedWorkOrders,
        };
      });

      return {
        ...state,
        isLoading: false,
        error: false,
        employees: temp,
      };
    case FETCH_EMPLOYEES_ERROR:
      return {
        ...state,
        error: true,
      };
    case UPDATE_EMPLOYEE_ASSIGMENT:
      let temp1 = [...state.employees];
      temp1[action.employeeIndex].workOrders[action.dateIndex] =
        action.workOrder;
      return {
        ...state,
        employees: temp1,
      };

    default:
      return state;
  }
}
