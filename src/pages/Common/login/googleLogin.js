import React from 'react'
import { googleLogin } from '../../../services/api';
import {GoogleLogin} from "react-google-login"
import { useHistory } from 'react-router-dom';

const LoginGoogle = ({status}) => {

    const history = useHistory();
    const responseGoogle = (response) => {
        console.log(response);
        Promise.resolve(googleLogin({ email: response.profileObj.email, password: response.profileObj.googleId, status: status, name: response.profileObj.name })).then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("status", res.data.status);
            localStorage.setItem("profile", response.profileObj.imageUrl);
            history.push('/');
            // window.location.reload();
        }).catch((e) => {
            console.log(e.response?.data?.error);
            // setError(true);
            // setText(e.response?.data?.error);
        })
    }
    const errorGoogle=(e)=>{
        console.log(e);
    }

    return (
        <div>
            <GoogleLogin method="POST"
                clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={errorGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginGoogle