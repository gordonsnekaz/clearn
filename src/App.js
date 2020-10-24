import React, { Suspense } from 'react';
import './App.css';
import Navside from './components/NavSide';
import Navtop from './components/Navtop';
import DashboardPage from './DashboardPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './Courses';
import AssesmentPage from './AssesmentPage';
import ProjectsPage from './ProjectsPage';
import ProgressPage from './ProgressPage';
import LiveSessionsPage from './LiveSessionsPage';
import CCoursePage from './CCoursePage';
import QuizPage from './QuizPage';
import TutorialPage from './TutorialPage';


function App() {
  return (
    <Router>
      <div className=''>
        <div className='fixed z-10 shadow-md py-4 px-8 bg-white fixed w-full'>
          <Navtop/>
        </div>
        <div className='flex z-0'>
          <div className='fixed flex-1 w-1/6 bg-blue-900 h-screen '>
            <Navside/>
          </div>
          <div className='w-1/6'>
          </div>
          <div className='pt-20 px-8'>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route exact path="/" component={ DashboardPage}/>
                  <Route path="/courses" component={ Courses }/>
                  <Route path="/assesment" component={ AssesmentPage }/>
                  <Route path="/projects" component={ ProjectsPage }/>
                  <Route path="/progress" component={ ProgressPage }/>
                  <Route path="/live-sessions" component={ LiveSessionsPage }/>
                  <Route path="/c-language" component={ CCoursePage }/>
                  <Route path="/quiz" component={ QuizPage } />
                  <Route path="/tutorial" component={ TutorialPage } />
                </Switch>
              </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
