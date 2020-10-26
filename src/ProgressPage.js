import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProgessPage() {
  const [ progressBarPer] = useState([
    {
      id: 1,
      title: "Variables in C",
      progPer: 23
    },
    {
      id: 2, 
      title: "Strings in C",
      progPer: 29
    },
    {
      id: 3,
      title: "Methods with C",
      progPer: 57
    },
    {
      id: 4, 
      title: "Structures in C",
      progPer: 63
    },
    {
      id: 4,
      title: "Files with C",
      progPer: 90
    }
  ])

  return (
    <div className='container'>
      < ProgressCard/>
      <div className='w-full'>
        { progressBarPer.map((progBarPer, key) => (
          <ProgressBar title={ progBarPer.title } progPer={ progBarPer.progPer } />
        ))}
      </div>
      <div className='pt-12'>
        <p className='text-xl font-semibold text-gray-800'>Badges</p>
      </div>
      <div className='flex'>
        { progressBarPer.map((progBarPer, key) => (
          <Badge title={ progBarPer.title } progPer={ progBarPer.progPer } />
        ))}
      </div>
      <p className='text-sm font-semibold text-teal-800 py-12'> Get more Badges by completing courses and writing quizes</p>
    </div>
  );
}

function ProgressCard(){
  return(
    <div className='bg-orange-500 rounded-md shadow-md w-full pt-12 pb-0'>
      <div className='px-8'>
        <p className='font-medium text-xl text-gray-300'>My progress</p>
        <p className='text-gray-300 py-8'> Don’t compare your progress to that of others. We need our own time to travel our own distance. Work hard for you and your own goals. 
          Make measurable progress in reasonable time and earn badges.</p>
        <div className='Progress pb-4'>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2">1 course completed</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2">2 courses in progress</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2">4 Badges</span>
        </div>
      </div>
      <Link to='/tutorial'>
      <div className=' flex bg-green-500 h-16 rounded-b-md items-center'>
        
        <p className='flex-1 w-full text-center text-2xl font-medium text-gray-900'> Keep making progress</p>
        
      </div>
      </Link>
    </div>
  )
}

function ProgressBar( {title, progPer} ){
  return(
    <div className='mt-8 w-full'>
      <p className='text-md font-semibold pb-2'> { title } <mark className='text-sm font-medium'>{ progPer }%</mark></p>
      <div className='bg-gray-400 w-full h-4 rounded-full'>
        <div className={`bg-${ progPer < 25 ? 'red' : progPer < 50 ? 'orange' : progPer < 75 ? 'blue' : 'green'}-500 rounded-full h-full`} style={{width: `${ progPer }%`}}></div>
      </div>
    </div>
  )
}

function Badge( {title, progPer} ){
  return(
    <div class="bg-white max-w-sm rounded-md hover:bg-gray-200 overflow-hidden shadow mb-8 mt-4 mr-12 w-48 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-125">
      <div class=''>
        <div class="font-semibold text-sm text-green-800 pb-4 px-2 py-4">{title}</div>
        <div className="w-full h-48 mr-4 bg-contain" style={{ backgroundImage: `url(${require('./components/completion2.jpg')})` }}></div>
        <p className='w-full text-center text-xl font-medium text-white bg-blue-500 my-2 mx-2 rounded'> Share </p>
      </div>
    </div>
  )
}
