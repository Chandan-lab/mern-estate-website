import React from 'react'
import {Link} from "react-router-dom";

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center  my-7 font-semibold'>Signup </h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='username'></input>
        <input type="text" placeholder='email' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='email'></input>
        <input type="text" placeholder='password' className='border p-3 rounded-lg border-2 bg-slate-50 ' id='password'></input>
        <button className=" uppercase bg-transparent hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Sign-up
</button>
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
