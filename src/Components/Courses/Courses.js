import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {

    const courseData = useLoaderData()

    console.log(courseData)
    return (
        <div className="mt-12 grid grid-cols-3 gap-2">
            {courseData.map(course => 
            <Course 
            key ={course.id}
            course={course}>

            </Course>)}
        </div>
    );
};

export default Courses;