import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
 <div className="navbar bg-primary text-primary-content">
  <Link to='/' className="btn btn-ghost text-3xl">JS TUT+</Link>
  <div className='pl-32'>
  <Link to='/courses' className="text-xl pr-4">Courses</Link>
  <Link to='/blogs' className="text-xl pr-4">Blogs</Link>
  <Link to='/faq' className="text-xl pr-4">FAQ</Link>
  <Link to='/register' className="text-xl pr-4">Register</Link>
  </div>
 </div>
        </div>
    );
};

export default Header;