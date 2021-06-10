export function validateForm(formValues) {
  //   console.log("VALIDATING", formValues);
  let errors = {};
  // Check name
  if (formValues.name === "") {
    errors.name = "Name cannot be empty";
  }

  if (formValues.email === "") {
    errors.email = "Email cannot be empty";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      formValues.email
    )
  ) {
    errors.name = "Email is not valid";
  }

  if (formValues.number === "") {
    errors.number = "Number cannot be empty";
  }

  return errors;
}
