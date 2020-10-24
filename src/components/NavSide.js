import React from 'react';
import { Link } from 'react-router-dom';


class Navside extends React.Component {
  render() {
      return (
        <div className='flex w-full'>
          <ul className='w-full pt-20'>
            <li className='font-medium text-lg py-2 hover:bg-blue-800 w-full  px-8'><Link to='/' className='text-gray-300'> Dashboard </Link></li>
            <li className='font-medium text-lg py-2 hover:bg-blue-800 w-full  px-8'><Link to='/progress' className='text-gray-300'> My progress </Link></li>
            <li className='font-medium text-lg mt-8 py-2 hover:bg-blue-800 w-full  px-8'><Link to='/courses' className='text-gray-300'> Courses </Link></li>
            <li className='font-medium text-lg py-2 hover:bg-blue-800 w-full  px-8'><Link to='/projects' className='text-gray-300'> Projects </Link></li>
            <li className='font-medium text-lg py-2 hover:bg-blue-800 w-full  px-8'><Link to='/assesment' className='text-gray-300'> Assesment </Link></li>
            <li className='font-medium text-lg mt-8 py-2 hover:bg-blue-800 w-full  px-8'><Link to='/live-sessions' className='text-gray-300'> Live sessions </Link></li>
          </ul>
        </div>
      );
  }
}

export default Navside;
