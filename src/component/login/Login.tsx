import React from 'react';
import "../landing-page/landing-page.css";
import 'tailwindcss/tailwind.css';

const LoginPage: React.FC = () => {
  return (
    <div className='background'>
      <div className='flex justify-between p-4 bg-blue-500 text-white'>
        <h2 className='m-2'>ORM</h2>
        <a href='#' className='m-2'>Home</a>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <h2 className='text-3xl font-bold'>Login</h2>
        <form className='mt-4 p-4 bg-white shadow-md rounded'>


        <div>
            <label htmlFor='password'>Enter email</label>
            <input></input>
          </div> <br /><br />

          <div>
            <label htmlFor='password'>Enter password</label>
            <input></input>
          </div> <br /><br />

          <div>
            <button type='submit'>Login</button>
          </div> <br /><br />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
