import * as actionTypes from "./actionTypes";
const initialState = {
  students: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    case actionTypes.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((stu, i) => i !== action.payload)
      };
    default:
      return state;
  }
}
