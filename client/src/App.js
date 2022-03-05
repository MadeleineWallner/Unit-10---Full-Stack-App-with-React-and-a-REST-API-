import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import Header from './Components/Header';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';

const app = () => (
  <Router>

    <Header />
      <Switch>
          <Route exact path="/api/courses" component={Courses}/>
          <Route path="/api/courses/:id" component={CourseDetail} />
          <Route path="/api/signin" component={UserSignIn} />
          <Route path="/api/signup" component={UserSignUp} />
      </Switch>



  </Router>
);

export default app;