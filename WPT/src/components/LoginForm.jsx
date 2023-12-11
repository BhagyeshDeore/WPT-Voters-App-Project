import React, { useState } from "react";
import { fetchVotersbyphone } from '../Services/voterServices';
import {login} from "../Services/AdminService";
import {useNavigate} from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate();
  //const[loginError,setLoginError]=useState(false)
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };



  // Assuming you have a login function in your component
  const handleVoterLogin = async () => {
    const phone = "9146480034"; // Replace with actual phone input
    const password = "Bhagyesh"; // Replace with actual password input

    try {
      const response = await fetchVotersbyphone(phone);

      if (response && response.voters.length > 0) {
        // Voter exists, now check the password
        const voter = response.voters[0];

        if (voter.password === password) {
          // Successful login
          console.log("Login successful!");
        } else {
          // Invalid password
          console.log("Invalid password");
        }
      } else {
        // Voter not found
        console.log("Voter not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate phone number
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make API request to authenticate user
        /*const response = await fetch("http://localhost:5000/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });*/
        const result= await login(formData);
        console.log(result);
        localStorage.setItem("token",result.token);
        navigate("/dashboard");

        //const data = await response.json();

        /*if (response.ok) {
          // Successful login
          console.log("Login successful!");
          setSubmitted(true);
        } else {
          // Login failed, display error message
          setErrors({ login: data.message });
        }*/
      } catch (error) {
        console.error("Error submitting login:", error);
        //setErrors({ login: "An error occurred while logging in" });
        //setLoginError(true);
      }
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="container h-100 d-flex align-items-center justify-content-center" style={{ marginTop: "20vh" }}>
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
          {submitted ? (
            <div className="success-message">Login successful!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label>Phone number</label>
                <input
                  type="text"  // Change this to text
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
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
                {errors.password && <div className="error">{errors.password}</div>}
              </div>

              {errors.login && <div className="error">{errors.login}</div>}

              <button type="submit" disabled={!isFormValid} className="btn btn-primary mt-3 w-100">
                Login
              </button>
            </form>
           
          )}

          <a
            href="/register"
            className="register-route"
            style={{
              textDecoration: "none",
              marginTop: "5px",
              display: "inline-block",
              fontSize: "0.8rem",
            }}
          >
            Do not have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
