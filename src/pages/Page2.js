import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { deleteStudent } from "../store/actions";

function Page2({ students, deleteStudent }) {
  let history = useHistory();

  if (students.length < 1) {
    return <p>No Students. Please Add students.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Street Name</th>
          <th>Phone #</th>
          <th>GPA</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, i) => (
          <tr
            key={i}
            onClick={() => {
              history.push(`/page3/${i}`);
            }}
            style={{ cursor: "pointer" }}
          >
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.streetName}</td>
            <td>{student.phoneNumber}</td>
            <td>{student.gpa}</td>
            <td>
              <button
                onClick={e => {
                  e.stopPropagation();
                  deleteStudent(i);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const mapStateToprops = ({ students }) => {
  return { students };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteStudent
    },
    dispatch
  );
};

export default connect(mapStateToprops, mapDispatchToProps)(Page2);
