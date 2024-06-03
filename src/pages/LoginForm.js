import React from 'react';
import './Login/Login.css';

function LoginForm({ role }) {
  const getPlaceholder = (role) => {
    switch (role) {
      case 'Teacher':
        return { userId: 'Teacher ID', password: 'Password' };
      case 'Admin':
        return { userId: 'Admin ID', password: 'Password' };
      default:
        return { userId: 'Student ID', password: 'Password' };
    }
  };

  const placeholders = getPlaceholder(role);

  return (
    <div className="login-form">
      <input type="text" placeholder={placeholders.userId} className="input-field" />
      <input type="password" placeholder={placeholders.password} className="input-field" />
      <button className="login-btn">Login</button>
    </div>
  );
}

export default LoginForm;
