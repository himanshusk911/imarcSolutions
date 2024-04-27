import React, { useState } from 'react';
import '../styles/loginStyle.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
 const [loginState,setLoginState]=useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // Password should have minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      email: '',
      password: ''
    };

    if (!validateEmail(formData.email)) {
      newErrors.email = 'This value is required';
      valid = false;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Value should be a valid';
      valid = false;
    }

    if (valid) {
      // Form submission logic
      setLoginState("Login Succesfull")
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputWrapper">
          <label className="inputLabel">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`inputField ${errors.email ? 'invalid' : ''}`}
          />
          <br />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="inputWrapper">
          <label className="inputLabel">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`inputField ${errors.password ? 'invalid' : ''}`}
          />
          <br />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <h4>Forget Password?</h4>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
      <div>
        <h3>{loginState}</h3>
      </div>
    </div>
  );
};

export default Login;
