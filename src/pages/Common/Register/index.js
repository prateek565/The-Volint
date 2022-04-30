import React, { useState } from 'react'
import EmailVerification from './emailVerification';
import Register from './Register';

const Signup = () => {

  const [verify, setverify] = useState(false);  //for opening up the verify screen
  const [email, setemail] = useState(null);
  const [ifVerified, setifVerified] = useState(false);  //to check whether the opt entered is correct or not
  const [status, setstatus] = useState('user')

  // states for user signup
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userpass, setuserpass] = useState("");
  const [userphone, setuserphone] = useState();
  const [usercnfpass, setusercnfpass] = useState("");

  // states for company signup
  const [companyname, setcompanyname] = useState("");
  const [companytitle, setcompanytitle] = useState("");
  const [companyemail, setcompanyemail] = useState("");
  const [companypass, setcompanypass] = useState("");
  const [companyphone, setcompanyphone] = useState();
  const [companycnfpass, setcompanycnfpass] = useState("");
  
  const userValues = {username,useremail,userpass,userphone,usercnfpass,setusername,setuseremail,setuserpass,setuserphone,setusercnfpass}

  const companyValues = {companyname,companytitle,companyemail,companypass,companyphone,companycnfpass,setcompanyname,setcompanytitle,setcompanyemail,setcompanypass,setcompanyphone,setcompanycnfpass}

  return (
    <div>
        {verify?
        <EmailVerification setverify={setverify} email={email} setifVerified={setifVerified} userValues={userValues} companyValues={companyValues} status={status}/>
        :
        <Register setverify={setverify} setemail={setemail} ifVerified={ifVerified} userValues={userValues} companyValues={companyValues} status={status} setstatus={setstatus}/>}
    </div>
  )
}

export default Signup