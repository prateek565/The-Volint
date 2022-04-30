import React, { Component, useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { signup } from '../../../services/api.js';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { ContentCutOutlined } from '@mui/icons-material';

const Company = ({ setverify, setemail, ifVerified, status, companyValues }) => {

    const history = useHistory();
    const { companyname, companytitle, companyemail, companypass, companyphone, companycnfpass, setcompanyname, setcompanytitle, setcompanyemail, setcompanypass, setcompanyphone, setcompanycnfpass } = companyValues

    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);
    const [term, setTerm] = useState(false);

    const EmployerSignup = async (e) => {
        e.preventDefault();
        if (companyname === "" || companyemail === "" || companytitle === "") {
            setError(true);
            setText("Please re-enter the correct credentials");
            return;

        }
        if (companycnfpass !== companypass) {
            setError(true);
            setText("Password and Confirmed password doesn't match!")
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
    };

    const handleEnter = (event) => {
        if (event.key.toLowerCase() === "enter") {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    const Termclicked = () => {
        setTerm(!term);
    }

    return (
        <div>
            <form id="login_form" className="login_form wrap-form">

                {error && <Alerterror text={text} />}
                {success && <Alertsuccess text={text} />}
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-bar-chart"></i>
                            <input value={companytitle} onkeydown={handleEnter} onChange={(e) => {
                                setcompanytitle(e.target.value)
                            }} type="text" placeholder="Company Title" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-user"></i>
                            <input value={companyname} onkeydown={handleEnter} onChange={(e) => {
                                setcompanyname(e.target.value)
                            }} type="text" placeholder="Owner's Name" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-email"></i>
                            <input value={companyemail} onkeydown={handleEnter} onChange={(e) => {
                                setcompanyemail(e.target.value)
                                setemail(e.target.value)
                            }} type="email" id="txtemail" placeholder="Email Address" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-mobile"></i>
                            <input value={companyphone} onkeydown={handleEnter} onChange={(e) => {
                                setcompanyphone(e.target.value)
                            }} type="tel" id="txtphone" placeholder="Phone Number" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-lock"></i>
                            <input value={companypass} onkeydown={handleEnter} onChange={(e) => {
                                setcompanypass(e.target.value)
                            }} type="password" id="password" placeholder="Password" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label>
                            <i className="ti ti-lock"></i>
                            <input value={companycnfpass} onkeydown={handleEnter} onChange={(e) => {
                                setcompanycnfpass(e.target.value)
                            }} type="password" id="cpassword" placeholder="Confirm Password *" />
                        </label>
                    </div>
                    <div className="col-lg-12 col-md-6">
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
                    <div className="col-lg-12 ">
                        <label className="mb-0">
                            <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                type="submit"
                                onClick={EmployerSignup}>Sign up</button>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Company