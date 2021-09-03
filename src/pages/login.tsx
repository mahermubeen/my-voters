import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useForm from './validations/useForm'
import validate from './validations/validate'


export default function Login() {
  const {handleChange, values, handleSubmit, errors} = useForm(validate);

  
  return (
    <>
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            placeholder="******"
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.password && <p>{errors.password}</p>}
          <div>
            <button className="login-btn" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </form>
        <img alt="sd" className="bg-pic-login" src="img/bg-login.png" />
      </div>
    </>
  );
}
