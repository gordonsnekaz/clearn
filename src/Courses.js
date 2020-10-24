import React from 'react';
import CoursesCards from './components/CoursesCards';

class Courses extends React.Component {
  render() {
    return (
      <div className='container bg-scroll'>
        <CoursesCards/>
      </div>
    );
  }
}

export default Courses;
