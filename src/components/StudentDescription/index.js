import React from "react";
import "./StudentDescription.css";

export default function StudentDescription({ student }) {
  return (
    <div className="sd-wrap">
      <div className="photo">placeholder</div>
      <div className="details-wrap">
        <div className="name-field">
          <p>First Name</p>
          <p>{student.firstName}</p>
        </div>
        <div className="name-field">
          <p>Last Name</p>
          <p>{student.lastName}</p>
        </div>
        <div className="name-field">
          <p>Street Name</p>
          <p>{student.streetName}</p>
        </div>
        <div className="name-field">
          <p>Phone Number</p>
          <p>{student.phoneNumber}</p>
        </div>
        <div className="name-field">
          <p>GPA</p>
          <p>{student.gpa}</p>
        </div>
      </div>
    </div>
  );
}
