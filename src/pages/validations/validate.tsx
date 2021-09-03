export default function validate(values, isSuccess) {
  let errors = {};
  console.log("validate value", isSuccess)
  if (!values.email) {
    errors.email = "Email Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid Email Address!";
  }else if(!isSuccess){
      errors.email = "Email Not Found!"
  }
  
  if (!values.password) {
    errors.password = "Password Required!";
  } else if (values.password < 6) {
    errors.password = "Password must greater than 6 letters!";
  }

  return errors;
}
