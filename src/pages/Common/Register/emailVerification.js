import React, { Component, useEffect, useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import { sendOTP, signup,verifyOTP } from '../../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const EmailVerification = ({ setifVerified, email, setverify, status, userValues, companyValues }) => {
    
    const { companyname, companytitle, companyemail, companypass, companyphone} = companyValues
    const { username, useremail, userpass, userphone} = userValues 
    const [verificationStatus, setVerificationStatus] = useState('');

    const [open, setOpen] = useState(false);

    const [otp, setotp] = useState("");

    const [error, setError] = useState(false);
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);

    const history = useHistory();

    const [code, setcode] = useState()

    useEffect(() => {
        email !== null && Promise.resolve(sendOTP(email)).then((res) => {
            console.log(res.data);
        setVerificationStatus('OTP sent successfully!');
        }).catch((e) => {
            console.log({ e });
        })
    }, [])

    const handleVerifyOTP = () => {
        verifyOTP({ email, otp }) 
          .then((response) => {
            console.log(response.data);
            if (response.data.success) {
              setVerificationStatus('OTP verified successfully!');
              Verify();
            } else {
              setVerificationStatus('Invalid OTP. Please try again.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    const Verify = (e) => {       
            status === 'user' && Promise.resolve(signup(
                {
                    name: username,
                    email: useremail,
                    password: userpass,
                    status: "user",
                    phone: userphone
                })).then(res => {
                    console.log(res);
                    setError(false);
                    setSuccess(true);
                    setText("SignUp Successfull")
                    localStorage.setItem("volintToken", res.data.token);
                    localStorage.setItem("status", res.data.status);
                   
                        history.push("/");
                        // window.location.reload();
                   

                }).catch((e) => {
                    console.log(e.response.data.error);
                    setError(true);
                    setText(e.response.data.error);
                    console.log(text);
                    history.push("/");
                })
            status === 'org' && Promise.resolve(signup(
                {
                    name: companyname,
                    status: "company",
                    title: companytitle,
                    email: companyemail,
                    password: companypass,
                    phone: companyphone
                })).then(res => {
                    console.log(res);
                    localStorage.setItem("volintToken", res.data.token);
                    localStorage.setItem("status", res.data.status);
                    setError(false);
                    setSuccess(true);
                    setText("SignUp Successfull")
                    
                        history.push("/");
                        // window.location.reload();
                    
                }).catch((e) => {
                    console.log(e.response);
                    setError(true);
                    setText(e.response.data.error);
                    if (text === "company with this email already exists") {
                        setError(false);
                        setText("");
                        history.push('/login');
                    }
                })
        
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
                                <p className='pt-30'>An OTP has been sent to {email} address, please enter the OTP below to verify your email address</p>
                                <p className='pt-30'>If you did not get the otp check in your promotions else check in spam folder</p>
                            </div>
                            <div className="ttm-tabs ttm-tab-style-02">
                                <Tabs>
                                    <div className="content-tab">
                                        {error && <Alerterror text={text} />}
                                        {success && <Alertsuccess text={text} />}
                                        <TabPanel>
                                            <form id="login_form" className="login_form wrap-form">
                                                <div className="d-flex flex-column align-items-center justify-content-center">
                                                    <div className="col-lg-6">
                                                        <label>
                                                            <i className="ti ti-lock"></i>
                                                            <input value={otp} onChange={(e) => {
                                                                setotp(e.target.value)
                                                            }} type="password" id="password" placeholder="Verification Code" />
                                                        </label>
                                                    </div>
                                                    <p>{verificationStatus}</p>
                                                    <div className="col-lg-6 mx-auto">
                                                        <label className="mb-0">
                                                            <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="button" onClick={handleVerifyOTP}>Verify</button>
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