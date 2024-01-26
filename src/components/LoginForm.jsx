// src/components/LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="container mx-auto mt-16 p-8 bg-gray-700 max-w-md rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-white">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">Username</label>
          <input {...register('username')} type="text" className="form-input mt-1 p-2 w-full text-gray-800" />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">Password</label>
          <input
            {...register('password')}
            type="password"
            className="form-input mt-1 p-2 w-full text-gray-800" 
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;