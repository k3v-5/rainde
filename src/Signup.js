import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signup", { values })
      .then((res) => console.log("Registered "))
      .catch((err = console.log(err)));
  };

  return (
    <div className="d-flex w-100 vh-100 bg-primary justify-content-center align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>{" "}
          <input
            type="text"
            placeholder="Ingrese nombre"
            name="nombre"
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>{" "}
          <input
            type="text"
            placeholder="Ingrese email"
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 rounded-0"
          onChange={handleChange}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
