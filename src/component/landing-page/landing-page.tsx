import React from 'react';
import "../landing-page/landing-page.css";
import 'tailwindcss/tailwind.css';
import '../../index.css';

const LandingPage: React.FC = () => {
  return (
    <div className='background'>
      <div className='flex justify-between text-white'>
        <h2 className='m-2'>ORM</h2>
        <a href='#' className='m-2'>Login</a>
      </div>

      <div className='flex flex-col items-center mt-8'>
        <h2 className='text-3xl font-bold'>Register</h2>
        <form className='mt-4 p-4 shadow-md rounded'>
          <div>
            <label htmlFor='firstName'>Enter first name</label>
            <input></input>
          </div> <br /><br />

          <div>
            <label htmlFor='Name'>Enter last name</label>
            <input></input>
          </div> <br /><br />

          <div>
            <label htmlFor='email'>Enter office mail</label>
            <input></input>
          </div> <br /><br />

          <div>
            <label htmlFor='password'>Enter password</label>
            <input></input>
          </div> <br /><br />

          <div>
            <button type='submit'>Submit</button>
          </div> <br /><br />
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
