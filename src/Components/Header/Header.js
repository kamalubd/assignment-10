import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';

const Header = () => {

    const { user } = useContext(AuthContext);


    return (
        // <div className='container mx-auto'>
        <div className="navbar bg-primary text-primary-content flex flex-row lg:space-x-48 md:space-x-4">
            <div>
                <Link to='/' className="text-3xl text-white ml-2">JS TUT+</Link>
            </div>
            <div className='text-white'>
                <Link to='/courses' className="text-xl mr-4 hover:text-orange-600 ">Courses</Link>
                <Link to='/blogs' className="text-xl mr-4 hover:text-orange-600 ">Blogs</Link>
                <Link to='/faq' className="text-xl mr-4 hover:text-orange-600 ">FAQ</Link>
                <Link to='/about' className="text-xl mr-4 hover:text-orange-600 ">About</Link>

            </div>

            <div className='text-white'>
                <Link to='/login' className="mr-4 hover:text-orange-600">Login</Link>
                <Link to='/register' className="mr-4 hover:text-orange-600">Register</Link>

                <p className='text-right'>User Name</p>
                {/* content habijabi from here */}
                
            </div>

        </div>
        // </div>
    );
};

export default Header;