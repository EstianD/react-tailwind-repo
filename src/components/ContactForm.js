import React, { useState, useEffect } from "react";
import { validateForm } from "../services/validateForm";
import { ACTIONS } from "../App";

const ContactForm = ({ dispatch }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleFormChange = (e) => {
    console.log("change: ", e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setFormValues({ ...formValues, [name]: value });
    console.log("STATE: ", formValues);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(formValues));
    console.log("ERRORS: ", validateForm(formValues));

    setSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      console.log("submitting");
      dispatch({ type: ACTIONS.ADD_CONTACT, payload: { contact: formValues } });
      setFormValues({ name: "", email: "", number: "" });
    }
  }, [errors]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleFormChange}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleFormChange}
        />
        <br />
        <label>Number:</label>
        <br />
        <input
          type="text"
          name="number"
          value={formValues.number}
          onChange={handleFormChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <p style={{ color: "red" }}>{errors.name}</p>
      <p style={{ color: "red" }}>{errors.email}</p>
      <p style={{ color: "red" }}>{errors.number}</p>
    </div>
  );
};

export default ContactForm;
