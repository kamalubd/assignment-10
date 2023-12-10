import React from 'react';
import registerJpg from '../../Assets/register.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
    <div className='alignment'>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <p className="w-2/3 "><img className='rounded-full' src={registerJpg} alt=""/></p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <h1 className="text-center text-2xl font-bold pt-8 bg-grey">Please Register Here!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className="label-text-alt text-sky-500">Already Have an account? <Link to='/login' className='hover:underline'>Login Here</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default Register;