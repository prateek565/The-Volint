import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/vendor/flaticon.css';
import './css/vendor/fontawesome.min.css';
import './css/vendor/themify-icons.css';
import Home3 from './pages/Home3';
import Job_list from './pages/User/Job_list';
import Job_details from './pages/User/Job_details';
import Candidate_list from './pages/Company/Candidate_list';
import Candidate_details from './pages/Company/Candidate_details';
import Login from './pages/Common/login/Login';
import Register from './pages/Common/Register/Register';
import axios from 'axios';
import Resume from './pages/User/Resume/Resume';
import ScrollToTop from './components/layout/Gotop';
import Apply from './pages/User/Application';
import { history } from './history';
import PostJob from './pages/Company/PostJob.js/PostJob';

import Company_interns from './pages/Company/Company_interns';
import Posted_Jobs from './pages/Company/Posted_Jobs';
import Applications from './pages/Company/Applicants';
import Terms from './components/Manual/Terms';
import Applied_Jobs from './pages/User/Applied_Jobs';
import User_profile from './pages/User/Profile/User_profile';
import EditResume from './pages/User/EditResume/index';
import EditJob from './pages/Company/EditJob.js/EditJob';
import CompanyProfile from './pages/Company/CompanyProfile';
import Projects from './pages/Company/Projects';
import ManageRecruitment from './pages/Company/ManageRecruitment';
import Jobs_by_filter from './pages/User/Job_by_filter';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import UserProjects from './pages/User/Projects/UserProjects';
import EmailVerification from './pages/Common/Register/emailVerification';
import Signup from './pages/Common/Register';
import ForgotPass from './pages/Common/forgotPassword';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://volunteerproject.herokuapp.com';
axios.defaults.params = {};

function App() {

  return (
    <div className="page">
      <Router history={history}>
       <Switch> 
        <Route exact path={`/`} component={ Home3 } />
        <Route exact path={`/home3`} component={ Home } />
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/Home2'}`} component={ Home2 } /> 
        <Route exact path={`${process.env.PUBLIC_URL + '/Home3'}`} component={ Home3 } />  */}
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/About_us'}`} component={ About_us } /> 
        <Route exact path={`${process.env.PUBLIC_URL + '/Services'}`} component={ Services } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Services_details'}`} component={ Services_details } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_classic'}`} component={ Blog_classic } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_grid'}`} component={ Blog_grid } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Blog_details'}`} component={ Blog_details } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Contact_01'}`} component={ Contact_01 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Contact_02'}`} component={ Contact_02 } /> */}
        <Route exact path={`/job_list`} component={ Job_list } />
        <Route path={`/job_details`} component={ Job_details } />
        <Route path={`/jobs_by_filter`} component={ Jobs_by_filter } />
        {/* <Route exact path={`${process.env.PUBLIC_URL + '/Carrer_01'}`} component={ Carrer_01 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Error_404'}`} component={ Error_404 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Error_405'}`} component={ Error_405 } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Employers_list'}`} component={ Employers_list } />
        <Route exact path={`${process.env.PUBLIC_URL + '/Employers_details'}`} component={ Employers_details } /> */}
        <Route path={`/candidate_list`} component={ Candidate_list } />
        <Route path={`/candidate_details`} component={ Candidate_details } />
        <Route exact path={ `/login`} component={ Login } />
        <Route exact path={`/signup`} component={ Signup } />
        <Route exact path={`/verify`} component={ EmailVerification } />
        <Route exact path={`/otppass`} component={ ForgotPass } />
        <Route exact path={`/resume`} component={ Resume } />
        <Route exact path={`/company_interns`} component={ Company_interns } />
        <Route exact path={'/applied'} component={Applied_Jobs} />
        <Route exact path={'/terms'} component={Terms} />
        <Route exact path={`/post_job`} component={ PostJob } />
        <Route exact path={`/profile`} component={ User_profile } />
        <Route exact path={`/company_profile`} component={ CompanyProfile } />
        <Route path={'/applicants'} component={Applications} />
        <Route exact path={'/application'} component={Apply} />
        <Route exact path={'/edit_resume'} component={EditResume} />
        <Route path={'/edit_job'} component={EditJob} />
        {/* <Route exact path={'/company/projects'} component={Projects} /> */}
        <Route exact path={'/user/projects'} component={UserProjects} />
        <Route exact path={'/applied_jobs'} component={Applied_Jobs} />
        <Route exact path={'/posted_jobs'} component={Posted_Jobs} />
        <Route exact path={'/manage_recruitment'} component={ManageRecruitment} />
        <ScrollToTop />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;


