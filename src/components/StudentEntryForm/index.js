import React from "react";
import "./StudentEntryForm.css";

export default function StudentEntryForm({ handleSaveStudent }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [streetName, setStreetName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [gpa, setGPA] = React.useState("");

  return (
    <form className="form">
      <div className="form-field">
        <p>First Name</p>
        <input
          type="text"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <p>Last Name</p>
        <input
          type="text"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <p>Street Name</p>
        <input
          type="text"
          required
          value={streetName}
          onChange={e => setStreetName(e.target.value)}
        />
      </div>
      <div className="form-field">
        <p>Phone Number</p>
        <input
          type="number"
          required
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-field">
        <p>GPA</p>
        <input
          type="text"
          required
          value={gpa}
          onChange={e => setGPA(e.target.value)}
        />
      </div>
      <div className="save-button-wrap">
        <button
          className="save-button"
          type="submit"
          onClick={e => {
            e.preventDefault();
            handleSaveStudent({
              firstName: firstName,
              lastName: lastName,
              streetName: streetName,
              phoneNumber: phoneNumber,
              gpa: gpa
            });
            alert(
              "Student details Saved. Go to Page 2 to check the student details"
            );
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setStreetName("");
            setGPA("");
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}
