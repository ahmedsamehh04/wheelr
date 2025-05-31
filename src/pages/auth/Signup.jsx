import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Signup.css';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      
      console.log('Signup attempt with:', data);
      
      
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="car-background"></div>
      <div className="signup-content">
        <div className="signup-header">
          <span className="signup-icon">👤</span>
          <h1>Sign up</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="form-group">
            <label>First name:</label>
            <input
              type="text"
              {...register('firstName')}
              placeholder="First name"
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last name:</label>
            <input
              type="text"
              {...register('lastName')}
              placeholder="Last name"
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              {...register('email')}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              {...register('password')}
              placeholder="••••••••••••"
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Confirm password:</label>
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="••••••••••••"
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button type="submit" className="signup-button">
            sign up
          </button>

          <p className="login-prompt">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
