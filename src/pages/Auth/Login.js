import React from "react";
import "./Login.css";
// import logo from "./logo.png"; // replace with your actual logo path

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="#" alt="Converro Logo" />
      </div>

      <div className="login-card">
        <h2>Sign In to Converro</h2>

        <form>
          <div className="input-group">
            <input
              type="email"
              placeholder="converro@converro.io"
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type="password"
              placeholder="Password"
              required
            />
            <span className="toggle-password">
              <i className="fa fa-eye-slash"></i>
            </span>
          </div>

          <div className="options-row">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            <i className="fa fa-lock"></i> CONTINUE
          </button>

          <p className="signup-text">
            Don’t have a Converro account? <a href="#">Sign up.</a>
          </p>
        </form>
      </div>

      <p className="consent-text">
        I consent to the terms of the <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
}
