import React, { Component, useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { signup } from '../../../services/api.js';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { ContentCutOutlined } from '@mui/icons-material';

const Candidate = ({ ifVerified, setverify, setemail, status, userValues }) => {

    const history = useHistory();
    const { username, useremail, userpass, userphone, usercnfpass, setusername, setuseremail, setuserpass, setuserphone, setusercnfpass } = userValues;
    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);
    const [term, setTerm] = useState(false);

    const Termclicked = () => {
        setTerm(!term);
    }
    const handleEnter = (event) => {
        if (event.key.toLowerCase() === "enter") {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };


    const CandidateSignup = async (e) => {
        e.preventDefault();

        if (username === "" || useremail === "") {
            setError(true);
            setText("Missing Credentials");
            return;
        }
        if (usercnfpass !== userpass) {
            setError(true);
            setText("Password and Confirmed password doesn't match!");
            return;
        }
        if (!term) {
            setError(true);
            setText("Please accept our terms and conditions");
            return;
        }
        else {
            setverify(true);
        }
        setTimeout(() => {
            setError(false);
            if (text === `user with this email already exists`) {
                setError(false);
                setText("");
                history.push('/login');
            }
            setText("");
        }, 5000);


    };

    return (

        <form id="login_form" className="login_form wrap-form">

            {error && <Alerterror text={text} />}
            {success && <Alertsuccess text={text} />}
            <div className="row">
                <div className="col-lg-6">
                    <label>
                        <i className="ti ti-user"></i>
                        <input value={username} onkeydown={handleEnter} onChange={(e) => {
                            setusername(e.target.value)
                        }} name="requiredField" required ref={({ required: true })} type="text" id="txtname" placeholder="Full Name" />
                    </label>
                </div>
                <div className="col-lg-6">
                    <label>
                        <i className="ti ti-email"></i>
                        <input value={useremail} onkeydown={handleEnter} onChange={(e) => {
                            setuseremail(e.target.value)
                            setemail(e.target.value)
                        }} type="email" required id="txtemail" placeholder="Email" />
                    </label>
                </div>
                <div className="col-lg-6">
                    <label>
                        <i className="ti ti-lock"></i>
                        <input value={userpass} onkeydown={handleEnter} onChange={(e) => {
                            setuserpass(e.target.value)
                        }} type="password" id="password" placeholder="Password" />
                    </label>
                </div>
                <div className="col-lg-6">
                    <label>
                        <i className="ti ti-lock"></i>
                        <input value={usercnfpass} onkeydown={handleEnter} onChange={(e) => {
                            setusercnfpass(e.target.value)
                        }} type="password" id="cpassword" placeholder="Confirm Password *" />
                    </label>
                </div>
                <div className="col-lg-12">
                    <label>
                        <i className="ti ti-mobile"></i>
                        <input value={userphone} onChange={(e) => {
                            setuserphone(e.target.value)
                            // onkeydown={handleEnter}
                        }} type="tel" id="txtphone" placeholder="Phone Number" />
                    </label>
                </div>
                <div className="col-lg-12">
                    <label className="mt-0">
                        <div className="d-md-flex align-items-center justify-content-between">
                            <div className="cookies-checkbox mt-15">
                                <div className="d-flex flex-row justify-content-start">
                                    <input className="w-auto mr-10 mt-5" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" onClick={Termclicked} />
                                    <span>Accept our <Link style={{ textDecorationLine: true }} exact to={'/terms'}>Terms and Conditions and Privacy Policy</Link></span>
                                </div>
                            </div>
                            <div className="mt-15">
                                <p>Already registered?<Link exact to={'/login'} className="text-theme-SkinColor" style={{ fontWeight: 'bold' }}> Login here</Link></p>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="col-lg-12">
                    <label className="mb-0">
                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                            type="submit"
                            onClick={CandidateSignup}>Sign up</button>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Candidate