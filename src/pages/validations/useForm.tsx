import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import { useLoginUserMutation } from "../../services/auth";
import validate from "./validate";

const useForm = (validate) => {
  const history = useHistory();

  const [loginInput, res] = useLoginUserMutation();
  const isSuccess = res.isSuccess;

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginInput({ email: values.email, password: values.password })
      .unwrap()
      .then((payload) => {
        localStorage.setItem("user-token", payload.token);

        if (payload.user.isAdmin && payload.user.email === values.email) {
          setErrors(validate(values, isSuccess));
          history.push("/home");
        }
      })
      .catch((error) => {
        setErrors(validate(values, isSuccess));
      });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
