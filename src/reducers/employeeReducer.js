const INITIAL_STATE = {};
import { EMPLOYEE_FETCH_SUCCESS } from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
