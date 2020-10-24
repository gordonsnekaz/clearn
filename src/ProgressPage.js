import React from 'react';
import { Link } from 'react-router-dom';

class ProgressPage extends React.Component {
  render() {
    return (
      <div className='container'>
        < ProgressCard/>
        <div className='py-8'>
          <p className='text-md font-semibold'>Badges</p>
        </div>
        <p className='text-4xl font-medium pb-8 text-gray-600'> You currently do not have any Badges.</p>
        <p className='text-xl font-semibold text-teal-800'> Get Badges by completing courses and writing quizes</p>
      </div>
    );
  }
}

export default ProgressPage;

function ProgressCard(){
  return(
    <div className='bg-yellow-600 rounded-md shadow-md w-full pt-12 pb-0'>
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