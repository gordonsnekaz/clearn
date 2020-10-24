import React from 'react';

class LiveSessionsPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <p className='font-semibold text-4xl'> Live sessions </p>
        <p className='font-medium text-2xl py-8'> Sorry!!! We currently do not have live session now. </p>
        <p className='font-medium text-lg'><mark> Upcoming events </mark></p>
        <ul className='py-4 px-12 list-disc'>
          <li className='text-blue-600 pb-2'>12-09-2020 <u className='text-gray-600'> Introduction to Object oriented programming </u></li>
          <li className='text-blue-600 pb-2'>12-09-2020 <u className='text-gray-600'> Get started with Object oriented programming </u></li>
          <li className='text-blue-600 pb-2'>12-09-2020 <u className='text-gray-600'> Fundamentals of  SQL </u></li>
        </ul>
      </div>
    );
  }
}

export default LiveSessionsPage;
