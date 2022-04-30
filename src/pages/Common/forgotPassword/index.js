import React, { Component, useState } from 'react';
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { forgotPass, getCode, googleLogin, login } from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
// import GitHubLogin from 'github-login';

const ForgotPass = () => {
    const history=useHistory();
    const [pass, setpass] = useState("");
    const [cnfpass, setcnfpass] = useState("");
    const [email, setemail] = useState('');

    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setsuccess] = useState(false)

    const [code, setcode] = useState();
    const [otp, setotp] = useState();
    const [verify, setverify] = useState(false)

    const sendOTP = (e) => {
        e.preventDefault();
        if (pass !== cnfpass) {
            alert('password and confirm password does not match')
            return;
        }
        setverify(true);
        Promise.resolve(getCode(email)).then((res) => {
            setcode(res.data.code);
            setsuccess(false)
        }).catch((e) => {
            console.log({ e });
        })
    }

    const verifyOTP = (e) => {
        e.preventDefault();
        if (code === otp) {
            Promise.resolve(forgotPass(email, pass, 'user')).then((res) => {
                console.log(res.data);
                setsuccess(true);
                setText(res.data.message);
            }).catch((e) => {
                console.log({ e });
                setError(true)
                setText('Some error occured while changing your password');
            })
        }
        setTimeout(() => {
            setsuccess(false);
            setError(false);
            setText('')
            history.push("/login");
        }, 3000);
    }

    const EmailPassword = () => {
        return (
            <div className="layer-content">
                <div className="text-center mb-20">
                    <h3>Change your password</h3>
                </div>
                <div className="ttm-tabs ttm-tab-style-02">
                    <div className="content-tab">
                        {error && <Alerterror text={text} />}
                        {success && <Alertsuccess text={text} />}
                        <form id="login_form" className="login_form wrap-form">
                            <div className="">
                                <div className="col-lg-6 m-auto">
                                    <label>
                                        <i className="ti ti-email"></i>
                                        <input value={email} onChange={(e) => {
                                            setemail(e.target.value)
                                        }} type="email" id="txtemail" placeholder="Email Address" />
                                    </label>
                                </div>
                                <div className="col-lg-6 m-auto">
                                    <label>
                                        <i className="ti ti-lock"></i>
                                        <input value={pass} onChange={(e) => {
                                            setpass(e.target.value)
                                        }} type="password" id="password" placeholder="New Password" />
                                    </label>
                                </div>
                                <div className="col-lg-6 m-auto">
                                    <label>
                                        <i className="ti ti-lock"></i>
                                        <input value={cnfpass} onChange={(e) => {
                                            setcnfpass(e.target.value)
                                        }} type="password" id="password" placeholder="Confirm New Password" />
                                    </label>
                                </div>
                                <div className="col-lg-6 mx-auto">
                                    <label className="mb-0">
                                        <button onClick={sendOTP} className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Send OTP</button>
                                    </label>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

    const OTPScreen = () => {
        return (
            <div className="layer-content">
                <div className="text-center mb-20">
                    <h3>Verify OTP</h3>
                </div>
                <div className="ttm-tabs ttm-tab-style-02">
                    <div className="content-tab">
                        {error && <Alerterror text={text} />}
                        <form id="login_form" className="login_form wrap-form">
                            <div className="">
                                <div className="col-lg-6 m-auto">
                                    <label>
                                        <i className="ti ti-lock"></i>
                                        <input value={otp} onChange={(e) => {
                                            setotp(e.target.value)
                                        }} type="email" id="txtemail" placeholder="Email Address" />
                                    </label>
                                </div>
                                <div className="col-lg-6 mx-auto">
                                    <label className="mb-0">
                                        <button onClick={verifyOTP} className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Send OTP</button>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
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
                                {/* {verify ? <OTPScreen /> : <EmailPassword />} */}
                                <div className="layer-content">
                                    <div className="ttm-tabs ttm-tab-style-02">
                                        <div className="content-tab">
                                            {error && <Alerterror text={text} />}
                                            {verify ?
                                                <>
                                                    <div className="layer-content">
                                                        <div className="text-center mb-20">
                                                            <h3>Verify OTP</h3>
                                                        </div>
                                                        <div className="ttm-tabs ttm-tab-style-02">
                                                            <div className="content-tab">
                                                                {error && <Alerterror text={text} />}
                                                                <form id="login_form" className="login_form wrap-form">
                                                                    <div className="">
                                                                        <div className="col-lg-6 m-auto">
                                                                            <label>
                                                                                <i className="ti ti-lock"></i>
                                                                                <input value={otp} onChange={(e) => {
                                                                                    setotp(e.target.value)
                                                                                }} type="email" id="txtemail" placeholder="Email Address" />
                                                                            </label>
                                                                        </div>
                                                                        <div className="col-lg-6 mx-auto">
                                                                            <label className="mb-0">
                                                                                <button onClick={verifyOTP} className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Send OTP</button>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </> :
                                                <div className="layer-content">
                                                    <div className="text-center mb-20">
                                                        <h3>Change your password</h3>
                                                    </div>
                                                    <div className="ttm-tabs ttm-tab-style-02">
                                                        <div className="content-tab">
                                                            {error && <Alerterror text={text} />}
                                                            <form id="login_form" className="login_form wrap-form">
                                                                <div className="">
                                                                    <div className="col-lg-6 m-auto">
                                                                        <label>
                                                                            <i className="ti ti-email"></i>
                                                                            <input value={email} onChange={(e) => {
                                                                                setemail(e.target.value)
                                                                            }} type="email" id="txtemail" placeholder="Email Address" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-lg-6 m-auto">
                                                                        <label>
                                                                            <i className="ti ti-lock"></i>
                                                                            <input value={pass} onChange={(e) => {
                                                                                setpass(e.target.value)
                                                                            }} type="password" id="password" placeholder="New Password" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-lg-6 m-auto">
                                                                        <label>
                                                                            <i className="ti ti-lock"></i>
                                                                            <input value={cnfpass} onChange={(e) => {
                                                                                setcnfpass(e.target.value)
                                                                            }} type="password" id="password" placeholder="Confirm New Password" />
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-lg-6 mx-auto">
                                                                        <label className="mb-0">
                                                                            <button onClick={sendOTP} className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Send OTP</button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                            }

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
export default ForgotPass;