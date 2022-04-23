import React, { Component, useState, useEffect } from 'react';
import Header from '../../../components/layout/Header';
import PageHeader from "../../../components/layout/PageHeader";
import { Footer } from '../../../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {signup} from '../../../services/api.js';
import { Link, useHistory } from 'react-router-dom';
import { Alerterror, Alertsuccess } from '../../../components/layout/Alerts';
import { ContentCutOutlined } from '@mui/icons-material';

// export class Register extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           candidateOn: "false",
//           employerOn: "false"
//         };
//     }
    
const Register = () => {  

        const history = useHistory();
        const [username, setusername] = useState("");
        const [useremail, setuseremail] = useState("");
        const [userpass, setuserpass] = useState("");
        const [userphone, setuserphone] = useState();
        const [usercnfpass, setusercnfpass] = useState("");
        const [error, setError] = useState(false);
        const [text, setText] = useState("");
        const [success, setSuccess] = useState(false);
        const[term, setTerm]= useState(false);
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
        const CandidateSignup = async(e) =>{
            e.preventDefault();
            
            if(username==="" || useremail===""){
                setError(true);
                setText("Missing Credentials");
                return;
            }
            if(usercnfpass!==userpass){
                setError(true);
                setText("Password and Confirmed password doesn't match!");
                return;
            }
            if(!term){
                setError(true);
                setText("Please accept our terms and conditions");
                return;
            }
            else{
                history.push("/verify");
                // Promise.resolve(signup(
                //     { 
                //         name : username, 
                //         email: useremail , 
                //         password: userpass , 
                //         status: "user",
                //         phone: userphone
                //     })).then(res => {
                //     console.log(res);
                //     setError(false);
                //     setSuccess(true);
                //     setText("SignUp Successfull")
                //     localStorage.setItem("volintToken",res.data.token);
                //     localStorage.setItem("status",res.data.status);
                //     setTimeout(() => {
                //         history.push("/profile");
                //         window.location.reload();
                //     }, 2000);
                   
                // }).catch((e) => {
                //     console.log(e.response.data.error);
                //     setError(true);
                //     setText(e.response.data.error);
                //     console.log(text);
                // })
            }
            setTimeout(() => {
                setError(false);
                if(text===`user with this email already exists`){
                    setError(false);
                    setText("");
                    history.push('/login');
                }
                setText("");
            }, 5000);
            
            
        }; 

        const [companyname, setcompanyname] = useState("");
        const [companytitle, setcompanytitle] = useState("");
        const [companyemail, setcompanyemail] = useState("");
        const [companypass, setcompanypass] = useState("");
        const [companyphone, setcompanyphone] = useState();
        const [companycnfpass, setcompanycnfpass] = useState("");
        

        const EmployerSignup = async(e) =>{
            e.preventDefault();
            if(companyname==="" || companyemail==="" || companytitle===""){
                setError(true);
                setText("Please re-enter the correct credentials");
                return;
                
            }
            if(companycnfpass!==companypass){
                setError(true);
                setText("Password and Confirmed password doesn't match!")
                return;
            }
            if(!term){
                setError(true);
                setText("Please accept our terms and conditions");
                return;
            }
            
            Promise.resolve(signup(
                { 
                    name : companyname, 
                    status: "company",
                    title: companytitle , 
                    email: companyemail , 
                    password: companypass , 
                    phone: companyphone
                })).then(res => {
                console.log(res);
                localStorage.setItem("volintToken",res.data.token);
                localStorage.setItem("status",res.data.status);
                setError(false);
                setSuccess(true);
                setText("SignUp Successfull")
                setTimeout(() => {
                    history.push("/company_profile");
                    window.location.reload();
                }, 2000);
            }).catch((e) => {
                console.log(e.response);
                setError(true);
                setText(e.response.data.error);
                if(text==="company with this email already exists"){
                    setError(false);
                    setText("");
                    history.push('/login');
                }
            })
        }; 
        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                {/*<PageHeader
                    title="register"
                    breadcrumb="register"
                />*/}
                {/* PageHeader end */}


                {/* register */}
                <div className="ttm-row register-section clearfix">
                    <div className="container">
                        <div className="row">
                          <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div  style={{ backgroundColor: '#7f96fd' }} className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="text-center mb-20">
                                            <h3>Create An Account</h3>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <TabList className="tabs">
                                                    <Tab className="tab">
                                                        <a>
                                                        <i className="flaticon flaticon-research"></i>
                                                            <span>Candidate</span><h5>Signup as Candidate</h5>
                                                        </a>
                                                    </Tab>
                                                    <Tab className="tab">
                                                        <a>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                            <span>Employer</span><h5>Signup as Organization</h5>
                                                        </a>
                                                    </Tab>
                                                </TabList> 
                                                {error && <Alerterror text={text} /> }
                                                {success && <Alertsuccess text={text} /> }
                                                <div className="content-tab">    
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input value={username} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setusername(e.target.value)
                                                                        }} name="requiredField" required ref={({ required: true })} type="text" id="txtname" placeholder="Full Name" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input value={useremail} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setuseremail(e.target.value)
                                                                        }} type="email" required id="txtemail" placeholder="Email" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input value={userpass} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setuserpass(e.target.value)
                                                                        }} type="password" id="password" placeholder="Password"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input value={usercnfpass} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setusercnfpass(e.target.value)
                                                                        }} type="password" id="cpassword" placeholder="Confirm Password *"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-mobile"></i>
                                                                        <input value={userphone} onChange={(e)=>{
                                                                            setuserphone(e.target.value)
                                                                            // onkeydown={handleEnter}
                                                                        }} type="tel" id="txtphone" placeholder="Phone Number"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mt-0">
                                                                        <div className="d-md-flex align-items-center justify-content-between">
                                                                            <div className="cookies-checkbox mt-15">
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    <input className="w-auto mr-10 mt-5" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" onClick={Termclicked}/>
                                                                                    <span>Accept our <Link style={{textDecorationLine: true}} exact to={'/terms'}>Terms and Conditions and Privacy Policy</Link></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-15">
                                                                                <p>Already registered?<Link exact to ={'/login'} className="text-theme-SkinColor" style={{fontWeight:'bold'}}> Login here</Link></p>
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
                                                    </TabPanel>
                                                    <TabPanel>
                                                        
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-bar-chart"></i>
                                                                        <input value={companytitle} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanytitle(e.target.value)
                                                                        }}  type="text" placeholder="Company Title"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input value={companyname} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanyname(e.target.value)
                                                                        }}  type="text"  placeholder="Owner's Name" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input value={companyemail} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanyemail(e.target.value)
                                                                        }}  type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-mobile"></i>
                                                                        <input value={companyphone} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanyphone(e.target.value)
                                                                        }}  type="tel" id="txtphone" placeholder="Phone Number"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input value={companypass} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanypass(e.target.value)
                                                                        }}  type="password" id="password" placeholder="Password"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input value={companycnfpass} onkeydown={handleEnter} onChange={(e)=>{
                                                                            setcompanycnfpass(e.target.value)
                                                                        }}  type="password" id="cpassword" placeholder="Confirm Password *"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12 col-md-6">
                                                                    <label className="mt-0">
                                                                        <div className="d-md-flex align-items-center justify-content-between">
                                                                            <div className="cookies-checkbox mt-15">
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    <input className="w-auto mr-10 mt-5" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" onClick={Termclicked}/>
                                                                                    <span>Accept our <Link style={{textDecorationLine: true}} exact to={'/terms'}>Terms and Conditions and Privacy Policy</Link></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-15">
                                                                                <p>Already registered?<Link exact to = {'/login'} className="text-theme-SkinColor" style={{fontWeight:'bold'}}> Login here</Link></p>
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
                                                    </TabPanel>
                                                </div>       
                                            </Tabs>
                                        </div>
                                        {/* <div className="login-social-buttons">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button id="login-with-facebook" className="social-account-button w-100 facebook-button">
                                                        <i className="ti ti-facebook"></i><span>Login With facebook</span>
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button id="login-with-google" className="social-account-button w-100 google-button">
                                                        <i className="ti ti-google"></i><span>Login With Google</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* login end */}

                
            <Footer/>
                        
            </div>
          )
   }

export default Register;