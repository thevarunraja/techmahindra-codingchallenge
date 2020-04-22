import React from "react";
import { connect } from "react-redux";

function Page1(props) {
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
}

const mapStateToprops = state => {
  return { state };
};

export default connect(mapStateToprops)(Page1);
