// src/components/RegisterForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-16 p-8 bg-gray-700 max-w-md rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-white">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">Username</label>
          <input
            {...register('username', { required: 'Username is required' })}
            type="text"
            className="form-input mt-1 p-2 w-full text-gray-800" 
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">Password</label>
          <input
            {...register('password', { required: 'Password is required', minLength: 8 })}
            type="password"
            className="form-input mt-1 p-2 w-full text-gray-800" 
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-white">Confirm Password</label>
          <input
            {...register('confirmPassword', { required: 'Confirm Password is required' })}
            type="password"
            className="form-input mt-1 p-2 w-full text-gray-800" 
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
