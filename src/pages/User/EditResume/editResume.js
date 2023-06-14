import React, { Component, useState, useEffect } from 'react';
import Profile from './Profile';
import Education from './Education';
import Projects from './Project';
import Experience from './Experience';
import Extras from './Extras';
import { TextField, Button, Container, Divider } from '@mui/material';
import { Card, CardHeader, CardContent } from '@mui/material';
import { Paper, Grid } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import ResumeTitle from './ResumeTitle';
import { editResume, getResume, PostResume } from '../../../services/api';
import { Alertsuccess } from '../../../components/layout/Alerts';

const EditResume = ({data,i}) => {

  const [success, setsuccess] = useState()
  const [text, settext] = useState('')
  console.log(data);
  const [state, setState] = useState({
    step: 1,
    resumeTitle:data.resumeTitle,
    // Personal Profile Details...
    name: data.name,
    email: data.email,
    phone: data.phone,
    github: data.github,
    linkedin: data.linkedin,
    facebook: data.facebook,

    // Education Information
    college: data.qualification[0]?.college,
    fromYearClg: data.qualification[0]?.fromYearClg,
    toYearClg: data.qualification[0]?.toYearClg,
    percentageClg: data.qualification[0]?.percentageClg,
    school: data.qualification[0]?.school,
    fromYearSchl: data.qualification[0]?.fromYearSchl,
    toYearSchl: data.qualification[0]?.toYearSchl,
    percentageSchl: data.qualification[0]?.percentageSchl,

    // Project Information...
    title: data.projects[0]?.title,
    link: data.projects[0]?.link,
    projectDescription: data.projects[0]?.projectDescription,

    // Experience Information
    companyName: data.experience[0]?.companyName,
    position: data.experience[0]?.position,
    duration: data.experience[0]?.duration,
    experienceDescription: data.experience[0]?.experienceDescription,

    // Extra Information
    skill1: data.skills[0],
    skill2: data.skills[1],
    skill3: data.skills[2],
    interest1: data.interests[0],
    interest2: data.interests[1],
    interest3: data.interests[2],
  });


  const handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    console.log(val);
    setState({
      ...state,
      [e.target.name]: val
    });
  };
  const handleEdit = (e) => {
    i==0&&window.scrollTo(0, 250);
    i==1&&window.scrollTo(0, 2400);
    i==2&&window.scrollTo(0, 4600);
  }
  const handleSubmit = (e) => {
    // console.log("e");
    // console.log(values);
    Promise.resolve((editResume(values))).then((res)=>{
      console.log(res);
      setsuccess(true)
      settext(`${resumeTitle} has been edited successfully`);
      setTimeout(() => {
        setsuccess(false)
        settext(``);
      }, 3000);
    }).catch((e)=>{
      console.log({e});
    })
  }
  const { step } = state;
  const {
    resumeTitle,
    // Profile-Information
    name,
    email,
    phone,
    github,
    linkedin,
    facebook,

    // Education Information
    college,
    fromYearClg,
    toYearClg,
    percentageClg,
    school,
    fromYearSchl,
    toYearSchl,
    percentageSchl,

    // Project Information...
    title,
    link,
    projectDescription,

    // Experience Information
    companyName,
    position,
    duration,
    experienceDescription,

    // Extra Information
    skill1,
    skill2,
    skill3,
    interest1,
    interest2,
    interest3,
  } = state;

  const values = {

    resumeTitle,
    // Profile-Information
    name,
    email,
    phone,
    github,
    linkedin,
    facebook,

    // Education Information
    college,
    fromYearClg,
    toYearClg,
    percentageClg,
    school,
    fromYearSchl,
    toYearSchl,
    percentageSchl,

    // Project Information...
    title,
    link,
    projectDescription,

    // Experience Information
    companyName,
    position,
    duration,
    experienceDescription,

    // Extra Information
    skill1,
    skill2,
    skill3,
    interest1,
    interest2,
    interest3,
  };
  // switch (step) {
  //   case 1:
  return (
    <>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <ResumeTitle
            handleChange={handleChange}
            values={values}
            i={i}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Profile
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Education
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-8 mx-auto text-center  mb-4">
          <Projects
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Experience
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className="App mt-3 mb-5">
        <div className="container col-lg-10 mx-auto text-center  mb-4">
          <Extras
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
      <div className='justify-center'>{success&&<Alertsuccess text={text}/>}</div>
      <div className=" justify-center mb-10" style={{ marginLeft: '37%' }}>
        <button
          variant="contained"
          type="submit"
          className="ttm-btn ttm-btn-style-fill ttm-btn-color-skincolor mr-10"
          onClick={handleEdit}
        >
          Edit {data.resumeTitle} Resume
        </button>
        <button
          variant="contained"
          type="submit"
          className="btn btn-primary ml-10 font-weight-bold"
          onClick={handleSubmit}
        >
          Save Details
        </button>
      </div>
    </>

  );

}

export default EditResume;