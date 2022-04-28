import React, { Component, useEffect, useState } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getCode, googleLogin, login } from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { useForm } from 'use-form-fields';
import { Alerterror } from '../../../components/layout/Alerts';
import { FcGoogle } from 'react-icons/fc';
import { GrTwitter, GrFacebook, GrLinkedin, GrGithub } from 'react-icons/gr';
import LoginGoogle from '../login/googleLogin';
import LoginFacebook from '../login/facebookLogin';
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
const EmailVerification = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [aMonth, setAMonth] = useState(false);
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

    const [google, setgoogle] = useState(false);
    const [facebook, setfacebook] = useState(false)
    const [twitter, settwitter] = useState(false)
    const [github, setgithub] = useState(false)
    const [linkedIn, setlinkedIn] = useState(false)

    const history = useHistory();

    const rememberPass = () => {
        setAMonth(true);
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
            history.push('/');
            // window.location.reload();
        }).catch((e) => {
            console.log(e.response?.data?.error);
            setError(true);
            setText(e.response?.data?.error);
        })

    }

    const [code, setcode] = useState()

    useEffect(() => {
        Promise.resolve(getCode(mail)).then((res) => {
            console.log(res.data.code);
            setcode(res.data.code)
        }).catch((e) => {
            console.log({ e });
        })
    }, [])

    const mail = localStorage.getItem('volintMail');
    const Verify = () => {
        if(userpass===code){
            localStorage.setItem('volintValue', true);
        }
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 d-flex align-items-center justify-content-center">
                    <div style={{ backgroundColor: 'orange' }} className="bg-theme- ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                        <div className="layer-content">
                            <div className="text-center mb-20">
                                <h3>Email Verification</h3>
                                <p className='pt-30'>An OTP has been sent to this email address, please enter the OTP below to verify your email address</p>
                            </div>
                            <div className="ttm-tabs ttm-tab-style-02">
                                <Tabs>
                                    <div className="content-tab">
                                        {error && <Alerterror text={text} />}
                                        <TabPanel>
                                            <form id="login_form" className="login_form wrap-form">
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <div className="col-lg-6">
                                                        <label>
                                                            <i className="ti ti-lock"></i>
                                                            <input value={userpass} onChange={(e) => {
                                                                setuserpass(e.target.value)
                                                            }} type="password" id="password" placeholder="Verification Code" />
                                                        </label>
                                                    </div>
                                                    <div className="col-lg-6 mx-auto">
                                                        <label className="mb-0">
                                                            <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit" onClick={Verify}>Verify</button>
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </TabPanel>

                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmailVerification;