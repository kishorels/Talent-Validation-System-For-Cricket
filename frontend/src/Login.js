import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:2001/login";
    const credentials = { email: email, password: password };

    try {
      const response = await axios.post(url, credentials);

      if (response.data.status === true) {
        setMessage("Login Successful");
        navigate("/Home");
      } else {
        setMessage("Invalid Email or Password");
      }
    } catch (err) {
      setMessage("Error: Login failed. Please check your information.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="heading">Login Form</h1>
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
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
              Login
            </button>
          </div>
        </form>
        <p>{message}</p>
        <div className="text-center">
          <Link to="/" className="btn btn-secondary">
            Go to Register Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
