import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CoursesCards() {

    const [courses] = useState([
      {
      title: "C Basics",
      time: 4,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "Database",
      time: 1,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "SQL full",
      time: 6,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "Java",
      time: 4,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "C# Basics",
      time: 4,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "Pc maintanance",
      time: 3,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    },
    {
      title: "Comuter Mathamatics",
      time: 2,
      description: "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.",
      lecturer: {
        name: "Gordon Munyaradzi Muneka",
        qualification: "Data Scientist"
      }
    }   
  ])

    return (
      <div className=''>
        <div className="bg-indigo-700 rounded-lg shadow-md w-full flex-1 px-8 pt-12 pb-16">
          <div className=''>
            <p className="font-medium text-2xl text-gray-300">Courses </p>
            <p className="text-gray-300 py-8">
              More and more jobs are requiring tech skills, like coding and design. Want to break into a new kind of job—or simply level up your current
              career? Enroll in Treehouse courses and make it happen.
            </p>
          </div>
          <div className='Progres'>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 2 Courses</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 29 Videos</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 123+ Students Enrolled </span>
          </div>
        </div>
        <div className='py-8'>
          <p className='font-semibold text-md'>2 courses</p>
        </div>
        <div className='flex flex-wrap justify-between'>
          {courses.map((course, key) => (
            <CCard title={course.title} description={course.description} lecturer={course.lecturer} time={course.time} />
          ))}
        </div>
      </div>
    );
}

function CCard({title, description, lecturer, time}) {
  return (
    <Link to='/c-language'>
    <div class="bg-white max-w-sm rounded-md hover:bg-gray-200 overflow-hidden shadow px-4 py-6 mb-8">
      <div class=''>
        <div class="font-medium text-2xl text-teal-900 pb-4">{title}</div>
        <p class="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className='py-8'>
        <span className="inline-block bg-gray-400 rounded-full px-8 py-1 text-sm font-semibold text-teal-800">
          {time} hours
        </span>
      </div>
      <hr className='w-full'></hr>
      <div className="flex pt-4">
        <div className="w-10 h-10 rounded-full mr-4 bg-contain" style={{ backgroundImage: `url(${require('./one.jpg')})` }}></div>
        <div className="text-sm">
          <p className="text-teal-800 font-medium leading-none">
            {lecturer.name}
          </p>
          <p className="text-gray-600">
            {lecturer.qualification}
          </p>
        </div>
      </div>
    </div>
    </Link>
  )
}

