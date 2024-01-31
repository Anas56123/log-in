import { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  

  return (
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
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <p>Don't have an account? <a className='sign-up'><strong>Sign Up</strong></a></p>
      </div>
    </div>
  );
}

export default LoginPage;
