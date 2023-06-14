// import React, {Component} from 'react';
// import Userfront from "@userfront/core";
// import { Tabs } from '@mui/material';

// // Initialize Userfront Core JS
// Userfront.init("demo1234");

// // Define the Password reset form component
// class PasswordResetForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       password: "",
//       passwordVerify: "",
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // Whenever an input changes value, change the corresponding state variable
//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     // Verify that the passwords match
//     if (this.state.password !== this.state.passwordVerify) {
//       return;
//     }
//     // Call Userfront.resetPassword()
//     Userfront.resetPassword({
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
          
//       <div className="site-main">
//                 <Header/>
            
//                 {/* PageHeader */} 
//                 <PageHeader
//                     title="Login"
//                     breadcrumb="Login"
//                 />
//                 {/* PageHeader end */}


//                 {/* login */}
//                 <div className="ttm-row login-section clearfix">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
//                                     <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
//                                     <div className="layer-content">
//                                         <div className="text-center mb-20">
//                                             <h3>Reset Password</h3>
//                                         </div>
//                                         <div className="ttm-tabs ttm-tab-style-02">
//                                             <Tabs>
//                                                 <div className="content-tab">                                
//                                                     <TabPanel>
//                                                         <form onSubmit={this.handleSubmit}>
//                                                             <div className="row">
//                                                                 <div className="col-lg-12">
//                                                                    <label>
//                                                                       Password
//                                                                       <input
//                                                                         name="password"
//                                                                         type="password"
//                                                                         value={this.state.password}
//                                                                         onChange={this.handleInputChange}
//                                                                       />
//                                                                    </label>
//                                                                 </div>
//                                                                 <div className="col-lg-12">
//                                                                    <label>
//                                                                        Re-type password
//                                                                        <input
//                                                                          name="passwordVerify"
//                                                                          type="password"
//                                                                          value={this.state.passwordVerify}
//                                                                          onChange={this.handleInputChange}
//                                                                        />
//                                                                    </label>
//                                                                 </div>
                                                                
//                                                                 <div className="col-lg-6 mx-auto">
//                                                                     <label className="mb-0">
//                                                                         <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit" onClick={CandidateLogin}>Sign in</button>
//                                                                     </label>
//                                                                 </div>
//                                                             </div>
//                                                         </form>
//                                                     </TabPanel>
//                                               <Tabs />
//                                          </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* login end */}

                
//             <Footer/>
                        
//             </div>
//     );
//   }
// }

// export default PasswordResetForm;
