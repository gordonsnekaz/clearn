import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CCoursePage() {

  const [courses] = useState([
    {
      id: 1,
      title: "Variables in C",
      time: 2,
      description: "Let's practice what you have leant. Master the basics of variables in C by taking this quiz."
    },
    {
      id: 2, 
      title: "Strings in C",
      time: 29,
      description: "Let's practice what you have leant. Master the basics of variables in C by taking this quiz."
    },
    {
      id: 3,
      title: "Methods with C",
      time: 43,
      description: "Let's practice what you have leant. Master the basics of variables in C by taking this quiz."
    }
])

  return (
    <div className='container'>
      <div className="bg-red-600 rounded-lg shadow-md w-full flex-1 px-8 pt-12 pb-16">
        <div className=''>
          <p className="font-medium text-2xl text-gray-300"> C Language </p>
          <p className="text-gray-300 py-8">
            Practice what you have learned with interactive exercises in your browser to get personalized learning recommendations to master 
            C programming language and win badges to increase your points. You can also retake assignments to track your progress.
          </p>
        </div>
        <div className='Progres'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 4 chapters completed</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 7 assesments completed</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 163+ Students Enrolled </span>
        </div>
      </div>
      <div className='py-8'>
        <p className='font-semibold text-md'> 3 Chapters </p>
      </div>
      <div className='w-full'>
        {courses.map((course, key) => (
          <AssesmentCard title={course.title} description={course.description} time={ course.time } />
        ))}
      </div>
    </div>
  );
}

function AssesmentCard({title, description, time}) {
  return (
    <Link to="/tutorial">
      <div class="bg-white rounded-md hover:bg-gray-200 overflow-hidden shadow px-4 py-6 mb-8">
        <div class=''>
          <div class="font-medium text-2xl text-teal-900 pb-4">{title}</div>
          <p class="text-gray-700 text-lg">
            {description}
          </p>
          <p className='py-2'> You have <mark> { time } minutes</mark> to complete the quiz </p>
          <div className='relative w-full pb-4 h-10'>
            <p className='absolute inset-y-0 right-0 px-12 py-2 bg-blue-600 rounded-full text-gray-300 text-lg'>Start quiz</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

