import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
   <React.Fragment>
     <Form
      firstName={firstName}
      lastName={lastName}
      handleChange={handleFirstNameChange}
      handleChangeLast={handleLastNameChange}
    />

    <DisplayData firstName={firstName} lastName={lastName} />
   </React.Fragment>
    
  );
}

export default ParentComponent;