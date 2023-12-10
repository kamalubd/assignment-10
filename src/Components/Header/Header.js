import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
 <div className="navbar bg-primary text-primary-content">
  <Link to='/' className="text-4xl text-white ml-2">JS TUT+</Link>
  <div className='pl-32 text-white'>
  <Link to='/courses' className="text-xl mr-4 hover:text-orange-600 ">Courses</Link>
  <Link to='/blogs' className="text-xl mr-4 hover:text-orange-600 ">Blogs</Link>
  <Link to='/faq' className="text-xl mr-4 hover:text-orange-600 ">FAQ</Link>
  <Link to='/register' className="text-xl mr-4 hover:text-orange-600 ">Register</Link>
  <Link to='/login' className="hidden text-xl mr-4 hover:text-orange-600 ">Login</Link>
  </div>
 </div>
        </div>
    );
};

export default Header;