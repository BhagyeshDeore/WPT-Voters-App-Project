


import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit or process the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  const register = {


  }

  return (
    <div className="container h-100 d-flex align-items-center justify-content-center"
    style={{marginTop: '20vh'}}
    >
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
          {submitted ? (
            <div className="success-message">Login successful!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label>Phone number</label>
                <input
                  type="number"
                  name="number"
                  className="form-control"
                  value={formData.number}
                  onChange={handleInputChange}
                />
                {errors.number && <div className="error">{errors.number}</div>}
              </div>

              <div className="form-group mt-2">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleInputChange}
                />
           
              </div>

              <button type="submit" disabled={!isFormValid}
                className="btn btn-primary mt-3 w-100"
              >
                Login
              </button>
            </form>

          )}
          <a href="/register" className="register-route" style={{
            textDecoration: "none",
            marginTop: "5px",
            display: "inline-block",
            fontSize: "0.8rem",
          }
          }>Do not have a account?  Register</a>

        </div>
      </div>

    </div>
  );
}

export default LoginForm;