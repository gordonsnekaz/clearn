import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TutorialPage() {
  const [editBoxState, setEditBoxState] = useState('#include <stdio.h>\n\nint main(){ \n  println("Hello, world";\n  return 0;\n}')
  return (
    <div className='container'>
      <div className='bg-red-700 rounded-lg shadow-md w-full flex-1 flex'>
        <div className='w-1/2 bg-gray-300 p-4 py-4'>
          <p className='text-xl'>Variables in C</p>
          <div className=''>

          </div>
          <div className=''>
            <p>
              Practice what you have learned with interactive exercises in your browser to get personalized learning recommendations to master 
              C programming language and win badges to increase your points. You can also retake assignments to track your progress.
            </p>
          </div>
        </div>
        <div className='w-1/2 bg-gray-700'>
          <p className='text-xl'> <mark className='bg-gray-800 text-gray-100 px-4 py-1 rounded'>test.cpp</mark></p>
          <textarea value={editBoxState} onChange={(e) => {setEditBoxState(e.target.value)}} rows='20' type='text' className='w-full bg-gray-800 py-4 px-2 text-white' />
        </div>
      </div>
    </div>
  );
}

function Card({title, description, time}) {
  return (
    <Link to="/quiz">
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

