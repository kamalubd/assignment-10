import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Courses from '../Components/Courses/Courses';
import Blogs from '../Components/Blogs/Blogs';
import Faq from '../Components/Faq/Faq';
import Register from '../Contexts/Register/Register';
import Login from '../Contexts/Login/Login';

const Routes = () => {

    const router = createBrowserRouter([
        {path:'/', element: <Layout></Layout>,
    children: [
        {path: 'courses', element: <Courses></Courses>},
        {path: 'faq', element: <Faq></Faq>},
        {path: 'blogs', element: <Blogs></Blogs>},
        {path: 'register', element: <Register></Register>},
        {path: 'login', element: <Login></Login>},
    ]}
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;