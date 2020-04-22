import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import StudentDescription from "../components/StudentDescription";

function Page3({ students }) {
  let { slug } = useParams();
  if (!students[slug]) {
    return <p>Bad request. Go back to page 1</p>;
  }

  return (
    <div>
      <StudentDescription student={students[slug]} />
    </div>
  );
}

const mapStateToprops = ({ students }) => {
  return { students };
};

export default connect(mapStateToprops)(Page3);
