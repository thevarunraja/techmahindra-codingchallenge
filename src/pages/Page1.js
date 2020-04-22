import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StudentEntryForm from "../components/StudentEntryForm";
import { saveStudent } from "../store/actions";

function Page1(props) {
  return (
    <div>
      <StudentEntryForm
        handleSaveStudent={student => props.saveStudent(student)}
      />
    </div>
  );
}

const mapStateToprops = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveStudent
    },
    dispatch
  );
};

export default connect(mapStateToprops, mapDispatchToProps)(Page1);
