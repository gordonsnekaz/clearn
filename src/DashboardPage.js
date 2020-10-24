import React from 'react';
import DashboardWelcomeCard from './components/DashboardWelcomeCard';

class DashboardPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <DashboardWelcomeCard/>
      </div>
    );
  }
}

export default DashboardPage;
