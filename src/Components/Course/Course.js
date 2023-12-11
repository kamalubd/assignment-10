import React from 'react';
import { ClipboardIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Course = ({course}) => {

    const {coursename, imgurl, instructor, lessons, price} = course;

    console.log(course)
    return (
           <div className="card w-96 bg-base-100 shadow-xl mt-4">
  <figure><img className='w-72 h-64 mt-2 rounded' src={imgurl} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className="card-title">{coursename}</h1>  

    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <div className=' flex flex-row space-x-24'>
      <div className='flex flex-row'><ClipboardIcon className="h-6 w-6 text-black"/>{lessons} Lessons</div> 
      <div className="flex flex-row" title="Instructor"  ><UserCircleIcon className="h-6 w-6 text-black mr-1"/>{instructor}</div>
      </div>
    </div>
    <button className="btn btn-primary mt-4 text-xl">Enroll Now</button>
  </div>
</div>
        
    );
};

export default Course;