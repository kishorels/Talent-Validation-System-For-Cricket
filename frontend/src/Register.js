import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"; // Import the main Register.css file


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:2001/users";
    const Credentials = { name: name, email: email, password: password };

    try {
      const response = await axios.post(url, Credentials);

      if (response.status === 200) {
        setMessage("Registration Successful");
        navigate("/Login");
        
      }
    } catch (err) {
      setMessage("Error: Registration failed. Please check your information.");
    }
  };

  return (
    <div className="registration-container">
      <h1 className="heading">Registration Form</h1>
      <div className="registration-card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                autoComplete="current-password"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <p>{message}</p> {/* Display the registration result message */}
          <div className="text-center">
            <Link to="/Login" className="btn btn-secondary">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
