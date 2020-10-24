import React from 'react';
import { Link } from 'react-router-dom';

class DashboardWelcomeCard extends React.Component {
  render() {
    return (
      <div className='flex-1'>
        <div className="bg-blue-700 rounded-lg shadow-md w-full px-8 pt-12 pb-8">
          <div className=''>
            <p className="font-medium text-xl text-gray-300">Welcome back, Munyaradzi Gordon Muneka</p>
            <p className="text-gray-300 py-8">
              We hope you are doing fine today. You were almost done with nested if statements. You can pick up from where you left off yesterday and contimue from there. All the best in your progress.
            </p>
          </div>
          <div className='Progress'>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2">4 Hours left</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2">13 Videos left</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2 mb-2"> 27 Exercises left</span>
          </div>
          <div className='relative pt-2 w-full h-10'>
            <Link to='/tutorial'>
              <p className='absolute inset-y-0 right-0 bg-green-500 rounded-full px-12 py-2 hover:bg-green-600 text-lg font-semibold text-gray-300'>Continue</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardWelcomeCard;
