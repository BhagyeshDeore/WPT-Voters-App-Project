import React, { useState } from 'react';
import { saveVoter } from '../Services/voterServices';
import { Container, Alert, Col, Row } from 'react-bootstrap';


export function RegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    gender: 'male',
    password: '', // Added password field to the state
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const ageRegex = /^\d+$/;
    if (!formData.age.trim() || !ageRegex.test(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = 'Valid age is required';
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }


    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })

    );

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Validate form command
    const isValid = validateForm();

    // if form is valid, go with registration!!!
    if (isValid) {
      // !!! registration data submission !!!
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
      console.log('Registration data submitted:', formData);
      const result = await saveVoter(formData);
      setFormData({ name: "", age: "", phone: "", password: "" });
      console.log(result.message);
    }
  };

  return (
    <Container>
      <div className='container mt-5 h-100 d-flex align-items-center justify-content-center'>
        <div className='col-md-2.5'>
          <div className='card shadow-sm p-2'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-group d-flex flex-column'>
                  <label>
                    Name:
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </label>
                  <span style={{ color: 'red', fontSize: '0.7rem' }}>{errors.name}</span>
                </div>
                <div className='form-group mt-2 d-flex flex-column'>
                  <label>
                    Age:
                    <input
                      type='text'
                      name='age'
                      className='form-control'
                      value={formData.age}
                      onChange={handleChange}
                    />
                  </label>
                  <span style={{ color: 'red', fontSize: '0.7rem' }}>{errors.age}</span>
                </div>
                <div className='form-group mt-2 d-flex flex-column'>
                  <label>
                    Phone Number:
                    <input
                      type='text'
                      name='phone'
                      className='form-control'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                  <span style={{ color: 'red', fontSize: '0.7rem' }}>{errors.phone}</span>
                </div>
                <div className='form-group mt-2 d-flex flex-column'>
                  <label>
                    Password:
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </label>
                  <span style={{ color: 'red', fontSize: '0.7rem' }}>{errors.password}</span>
                </div>
                <div className='form-group mt-2'>
                  <label>
                    Gender:
                    <select
                      name='gender'
                      className='form-control'
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                  </label>
                </div>
                <br />
                <button type='submit' className='btn btn-primary w-100'>
                  Register
                </button>
              </form>
              <Row className="mt-3">
                <Col lg={12}>
                  {isSubmitted ? <Alert variant="success">Voter Registered</Alert> : null}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
