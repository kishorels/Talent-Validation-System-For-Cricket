import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Bowl.css";

const Bowl = () => {
  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [proof, setProof] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  
 const handleEmailChange = (e) => {
   setEmail(e.target.value);
 };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleProofChange = (e) => {
    setProof(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.value);
  };

  return (
    <div className="background2">
      <div className="content">
        <div className="image-container">
          <img className="logo" src="logo5.png " alt="" />
        </div>

        <form
          action="https://formsubmit.co/kishorepa64@email.com"
          method="POST"
        >
          <div className="form-container">
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-4"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control mb-4"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-4"
                placeholder="State"
                value={state}
                onChange={handleStateChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-4"
                placeholder="City"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-4"
                placeholder="proof"
                value={proof}
                onChange={handleProofChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fileInput">certification link:</label>
              <input
                type="text"
                className="form-control-file mb-4"
                id="fileInput"
                value={selectedFile}
                onChange={handleFileChange}
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bowl;
