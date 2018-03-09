const INITIAL_STATE = {
  name: "",
  shift: "",
  phone: ""
};
import { EMPLOYEE_UPDATE } from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
