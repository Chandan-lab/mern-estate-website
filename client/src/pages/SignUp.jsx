import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";


export default function SignUp() {
  const [formData,setformData] = useState({})
  const [error,setError] =useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange= (e) =>{
    setformData({
      ...formData,
      [e.target.id] : e.target.value, 
    });
  };

  const handleSubmit= async (e) =>{
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center  my-7 font-semibold'>Signup </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='username'onChange={handleChange} ></input>
        <input type="text" placeholder='email' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='email' onChange={handleChange}></input>
        <input type="text" placeholder='password' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='password' onChange={handleChange}></input>
        <button disabled = {loading} className=" uppercase bg-transparent hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  {loading ? 'loading...' : 'SignUp'}
</button >
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Already have an account? </p>
      <Link to={'/sign-in'}>
        <span className='text-blue-600'>Login here</span>
      </Link>
      </div>
    </div>
  )
}
