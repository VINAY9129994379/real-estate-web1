import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error before submission
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!data.success) {
        setError(data.message);
        setLoading(false);
        navigate('/');
        return;
      }
      setLoading(false);
      console.log(data);
     
    } catch (err) {
      console.error('Error signing up:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form-contain">
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Username.."
          value={formData.username}
          required
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Your email.."
          value={formData.email}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Your password.."
          value={formData.password}
          required
        />
        <button disabled={loading} className="signup-btn" type="submit">
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="sign-in">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span>Sign In</span>
        </Link>
      </div>
      {error && <p className="error-message">{error}</p>} {/* Conditionally render error */}
    </div>
  );
}

export default SignUp;
