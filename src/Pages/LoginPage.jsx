import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <img src="./assets/Group 2.png" alt="Logo" />
          <br />
          <h1 className="login-title">Log in</h1>
          <p>Welcome back! Please enter your details.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="emailL"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="form-control"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="passwordL"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="split">
              <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                <span style={{ color: "GrayText" }}>Remember me</span>
              </div>

              <Link className="sign-up" to="/forget-password">
                Forget password?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link className="sign-up" to="/sign-up">
              <strong>Sign Up</strong>
            </Link>
          </p>
        </div>
      </div>
      <p className="arrt">© All Rights Reserved taprime.com</p>
    </>
  );
}

export default LoginPage;
