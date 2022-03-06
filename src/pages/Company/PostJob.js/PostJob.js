import React, {Component, useState} from 'react';
import { Footer } from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import PageHeader from '../../../components/layout/PageHeader';
import Profile from './Profile';
import Description from './Description';
import Qualification from './Qualification';
import Skills from './Skills';
import { Alertsuccess } from '../../../components/layout/Alerts';
import { postJob } from '../../../services/api';

const PostJob = () => {
  const [success, setSuccess]= useState(false);
  const [text, setText]= useState("");
  const [state, setState] = useState({
    // Personal Profile Details...
    company:'',
    title:'',
    category:'',
    experience:'',
    type:'',
    location:'',
    duration:'',
    stipend:'',

    // Description
    description:'',
    
    // Qualifications Required
    qualification:'',

    // Skills Required
     skills:'',
     perks:'',
     knowledge:'',
     position:'',
  });

  
  const handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    console.log(e.target.name, val);
    setState({
      ...state,
      [e.target.name]: val
    });
  };
  const handleSubmit = (e) => {
    console.log(e);
    console.log(values);
    setSuccess(true);
    setText('Job has been posted Successfully!')
    Promise.resolve(postJob(values)).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log({e});
    })
    setTimeout(() => {
      setSuccess(false);
      setText('');
    }, 3000);
  }
    const {
      // Profile-Information
    company,
    title,
    category,
    experience,
    type,
    location,
    duration,
    stipend,

    // Description
    description,
    
    // Qualifications Required
    qualification,

    // Skills Required
     skills,
     perks,
     knowledge,
     position,
    } = state;

    const values = {
      // Profile-Information
    company,
    title,
    category,
    experience,
    type,
    location,
    duration,
    stipend,

    // Description
    description,
    
    // Qualifications Required
    qualification,

    // Skills Required
     skills,
     perks,
     knowledge,
     position,
    };
    // console.log(company);
    return (
         <>
           <Header />
           <PageHeader
            title="Post an Opportunity"
            breadcrumb="post opportunity"
           />
              
         
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Profile
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3 ">
            <div className="container col-lg-10 mx-auto">
              <Description
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Qualification
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Skills
                handleChange={handleChange}
                values={values}
              />
            </div>
          </div>
          {success && <div className="App mt-3">
            <div className="container col-lg-10 mx-auto">
              <Alertsuccess text={text} />
            </div>
          </div>}
          <div className=" justify-center mb-10" style={{ marginLeft: '47%' }}>
            <button
              variant="contained"
              type="submit"
              className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
          <Footer />
         </>
    );
}

export default PostJob;
