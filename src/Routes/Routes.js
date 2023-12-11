import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Courses from '../Components/Courses/Courses';
import Blogs from '../Components/Blogs/Blogs';
import Faq from '../Components/Faq/Faq';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import About from '../Components/About Us/About';

const Routes = () => {

    const router = createBrowserRouter([
        {path:'/', element: <Layout></Layout>,
    children: [
        {path: 'courses', loader: () => {

            return fetch('https://assignment10-server-gray.vercel.app/courses')

        }, element: <Courses></Courses>},
        {path: 'faq', element: <Faq></Faq>},
        {path: 'blogs', element: <Blogs></Blogs>},
        {path: 'about', element: <About></About>},
        {path: 'login', element: <Login></Login>},
        {path: 'register', element: <Register></Register>},
    ]}
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;