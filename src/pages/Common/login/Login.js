import React, { Component, useState } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { googleLogin, login } from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { useForm } from 'use-form-fields';
import { Alerterror } from '../../../components/layout/Alerts';
import { FcGoogle } from 'react-icons/fc';
import { GrTwitter, GrFacebook, GrLinkedin, GrGithub } from 'react-icons/gr';
import LoginGoogle from './googleLogin';
import LoginFacebook from './facebookLogin';
import ReactFacebookLogin from 'react-facebook-login';
// import GitHubLogin from 'github-login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#e0d1ed',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};
const Login = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [aMonth, setAMonth] = useState(true);
    const [user, setUser] = useState(true);
    const [employer, setEmployer] = useState(true);

    const [useremail, setuseremail] = useState("");
    const [userpass, setuserpass] = useState("");

    const [companyemail, setcompanyemail] = useState("");
    const [companypass, setcompanypass] = useState("");

    const [candidateOn, setCandidateOn] = useState(false);
    const [employerOn, setEmployerOn] = useState(false);

    const [error, setError] = useState(false);
    const [text, setText] = useState("");

    const history = useHistory();

    const rememberPass = () => {
        setAMonth(!aMonth);
    }
    const [fields, handleFieldChange] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [confirmed, setConfirmed] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSendingCode, setIsSendingCode] = useState(false);

    const CandidateLogin = async (e) => {
        e.preventDefault();
        if (useremail === "") {
            setError(true);
            setText("Missing Credentials");
            return;
        }

        if (useremail !== "") {

            setCandidateOn(true);
            Promise.resolve(login({ email: useremail, password: userpass, status: "user", aMonth: aMonth })).then(res => {
                console.log(res);
                localStorage.setItem("volintToken", res.data.token);
                localStorage.setItem("status", res.data.status);
                history.push('/');
                // window.location.reload();
            }).catch((e) => {
                console.log(e.response?.data?.error);
                setError(true);
                setText(e.response?.data?.error);
            })
        }
    }
    const EmployerLogin = async (e) => {
        if (companyemail === "") {
            setError(true);
            setText("Missing Credentials");
            return;
        }
        e.preventDefault();
        Promise.resolve(login({ email: companyemail, password: companypass, status: "company", aMonth: aMonth })).then(res => {
            console.log(res);
            localStorage.setItem("volintToken", res.data.token)
            localStorage.setItem("status", res.data.status);
            history.push('/post_job');
            // window.location.reload();
        }).catch((e) => {
            console.log(e.response?.data?.error);
            setError(true);
            setText(e.response?.data?.error);
        })

    }
    const responseFacebook = (response) => {
        console.log(response);
        // Promise.resolve(login({ email: 'k@gmail.com', password: 'kanishka', status: "user", aMonth: aMonth })).then(res => {
        //     console.log(res);
        //     localStorage.setItem("volintToken", res.data.token)
        //     localStorage.setItem("status", res.data.status);
        //     history.push('/');
        //     // window.location.reload();
        // }).catch((e) => {
        //     console.log(e.response?.data?.error);
        //     setError(true);
        //     setText(e.response?.data?.error);
        // })
    }
    const responseGoogle = (response) => {
        console.log(response);
        Promise.resolve(googleLogin({ email: response.email, password: response.googleId, status: "user", name: response.name })).then(res => {
            console.log(res);
            localStorage.setItem("volintToken", res.data.token)
            localStorage.setItem("status", res.data.status);
            localStorage.setItem("profile", response.profileObj.imageUrl)
            history.push('/');
            // window.location.reload();
        }).catch((e) => {
            console.log(e.response?.data?.error);
            setError(true);
            setText(e.response?.data?.error);
        })
    }

    return (

        <div className="site-main">
            <div className="ttm-row login-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div style={{ backgroundColor: 'rgb(245, 185, 107)k' }} className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">
                                    <div className="text-center mb-20">
                                        <h3>Login To Your Account</h3>
                                    </div>
                                    <div className="ttm-tabs ttm-tab-style-02">
                                        <Tabs>
                                            <TabList className="tabs">
                                                <Tab className="tab" >
                                                    <a>
                                                        <i className="flaticon flaticon-research"></i>
                                                        <span>Candidate</span><h5>I am a Candidate</h5>
                                                    </a>
                                                </Tab>
                                                <Tab className="tab">
                                                    <a>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                        <span>Organization</span><h5>I am an Organization</h5>
                                                    </a>
                                                </Tab>
                                            </TabList>
                                            <div className="content-tab">
                                                {error && <Alerterror text={text} />}
                                                <TabPanel>
                                                    <form id="login_form" className="login_form wrap-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-email"></i>
                                                                    <input value={useremail} onChange={(e) => {
                                                                        setuseremail(e.target.value)
                                                                    }} type="email" id="txtemail" placeholder="Email Address" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-lock"></i>
                                                                    <input value={userpass} onChange={(e) => {
                                                                        setuserpass(e.target.value)
                                                                    }} type="password" id="password" placeholder="Password" />
                                                                </label>
                                                            </div>
                                                            <div className="">
                                                                <label>
                                                                    <div className=" text-center">
                                                                        <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" checked onClick={rememberPass} />
                                                                        <span>Remember Me</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 mx-auto">
                                                                <label className="mb-0">
                                                                    <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit" onClick={CandidateLogin}>Login</button>
                                                                </label>
                                                            <div className="col-lg-12">
                                                                <label>
                                                                    <div className="forgot-pwd text-center mt-5">
                                                                        <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor" style={{ fontWeight: 'bold' }}>Sign Up here</Link></p>
                                                                        <Link to={'/otppass'}>Forgot Password</Link>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                                <TabPanel>
                                                    <form id="login_form" className="login_form wrap-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-email"></i>
                                                                    <input value={companyemail} onChange={(e) => {
                                                                        setcompanyemail(e.target.value)
                                                                    }} type="email" id="txtemail" placeholder="Email Address" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <label>
                                                                    <i className="ti ti-lock"></i>
                                                                    <input value={companypass} onChange={(e) => {
                                                                        setcompanypass(e.target.value)
                                                                    }} type="password" id="password" placeholder="Password" />
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <label>
                                                                    <div className="forgot-pwd text-center mt-5">
                                                                        <input className="w-auto mr-10" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" checked onClick={rememberPass}/>
                                                                        <span>Remember Me</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 mx-auto">
                                                                <label className="mb-0">
                                                                    <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                                        type="submit" onClick={EmployerLogin}>Login</button>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <label>
                                                                    <div className="forgot-pwd text-center mt-5">
                                                                        <p className="mt-3">Don't have account? <Link to='/signup' className="text-theme-SkinColor " style={{ fontWeight: 'bold' }}>Sign Up here</Link></p>
                                                                        <p onClick={handleOpen}>Forgot Password</p>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                    <div className="login-social-buttons">
                                        <div className='d-flex justify-content-center'>
                                            <p >
                                                OR
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="login-social-buttons">
                                        <div className="row">
                                            <div className="row d-flex justify-content-center">
                                                <div>
                                                    <LoginGoogle status={'user'} />
                                                    {/* <LoginFacebook status={'user'} /> */}
                                                </div>
                                                {/* <ReactFacebookLogin
                                                    appId="951777148793990"
                                                    autoLoad={false}
                                                    fields="name,email,picture"
                                                    callback={responseFacebook}
                                                    cssClass=""
                                                    icon="fa-facebook"
                                                /> */}
                                                {/* <div className="col-lg-6 flex pointer" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: 'auto' }}>
                                                    <div style={{ cursor: 'pointer' }}>
                                                        <FcGoogle size={'2rem'} />
                                                    </div>
                                                    <GrFacebook size={'2rem'} color='#4267B2' />
                                                    <GrGithub size={'2rem'} />
                                                    <GrLinkedin size={'2rem'} color='#0e76a8' />
                                                    <GrTwitter size={'2rem'} color='#00acee' />
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* login end */}


            <Footer />

        </div>
    );
}
export default Login;