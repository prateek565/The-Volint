import React, {Component, useEffect, useState} from 'react';
import { Footer } from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import PageHeader from '../../../components/layout/PageHeader';
import Profile from './Profile';
import Description from './Description';
import Qualification from './Qualification';
import Skills from './Skills';
import { editJob, getJob } from '../../../services/api';
import { useLocation } from 'react-router-dom';

const EditJob = () => {
  const [success, setsuccess] = useState()
  const [text, settext] = useState('')
  const [editjob, setEditjob]= useState([]);
  const l = useLocation();
  let id = l.pathname;
  id = id.split('/edit_job/')[1];
  
  const [job, setJob] = useState({
   
    // Personal Profile Details...
    company: editjob.company,
    title: editjob.title,
    category: editjob.category,
    experience: editjob.experience,
    type: editjob.type,
    location: editjob.location,
    duration: editjob.duration,
    stipend: editjob.stipend,

    // Description
    description: editjob.description,
    
    // Qualifications Required
    qualification: editjob.qualification,

    // Skills Required
     skills: editjob.skills,
     position: editjob.position,
     perks: editjob.perks,
  });
  console.log(job);
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
     position, 
     perks,
    } = job;

    useEffect(() => {
      console.log(id);
      Promise.resolve(getJob(id)).then((res) => {
        console.log(res.data);
        setJob(res.data)
      }).catch((e) => {
          console.log({ e });
      })
      }, [])
    console.log(job.company);
    const values = {
    // Personal Profile Details...
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
     position,
     perks,
    };

    const handleChange = (e) => {
      e.preventDefault();
      const val= e.target.value;
      console.log(val);
      setJob ({
        ...job,
        [e.target.name]: val});
    };
    const handleSubmit = (e) => {
      console.log(e);
      Promise.resolve(editJob(id,values)).then((res) => {
        console.log(res);
        setsuccess(true)
        settext(`${title} has been edited successfully`);
        setTimeout(() => {
          setsuccess(false)
          settext(``);
        }, 3000);
    }).catch((e) => {
        console.log({ e });
    })
    }
    // console.log(company);
    return (
         <>
           <Header />
           <PageHeader
            title="Edit Job"
            breadcrumb="edit job"
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

export default EditJob;
