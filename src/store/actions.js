import * as actionTypes from "./actionTypes";

export const saveStudent = student => ({
  type: actionTypes.SAVE_STUDENT,
  payload: student
});

export const deleteStudent = studentIndex => ({
  type: actionTypes.DELETE_STUDENT,
  payload: studentIndex
});
