import React, { useState } from 'react';
import './Login.css';
import LoginForm from '../LoginForm';

function Login() {
  const [role, setRole] = useState('Student');

  const handleRoleChange = (role) => {
    setRole(role);
  };

  return (
    <div className="container">
      <div className="role-buttons">
        <button className="role-btn" onClick={() => handleRoleChange('Student')}>Student</button>
        <button className="role-btn" onClick={() => handleRoleChange('Teacher')}>Teacher</button>
        <button className="role-btn" onClick={() => handleRoleChange('Admin')}>Others</button>
      </div>
      <h1>Welcome!</h1>
      <p>Login to your account</p>
      <LoginForm role={role} />
      <div className="register-link">
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
