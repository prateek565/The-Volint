import React from 'react'
import { googleLogin } from '../../../services/api';
import { FacebookLogin } from "react-facebook-login"
import { useHistory } from 'react-router-dom';

const LoginFacebook = ({ status }) => {

    const history = useHistory();
    const responseFacebook = (response) => {
        console.log(response);
        // Promise.resolve(googleLogin({ email: response.profileObj.email, password: response.profileObj.googleId, status: status, name: response.profileObj.name })).then(res => {
        //     console.log(res);
        //     localStorage.setItem("token", res.data.token)
        //     localStorage.setItem("status", res.data.status);
        //     localStorage.setItem("profile", response.profileObj.imageUrl)
        //     history.push('/');
        //     // window.location.reload();
        // }).catch((e) => {
        //     console.log(e.response?.data?.error);
        //     // setError(true);
        //     // setText(e.response?.data?.error);
        // })
    }
    const errorGoogle = (e) => {
        console.log(e);
    }

    return (
        <div>
            <FacebookLogin
                appId="951777148793990"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass=""
                icon="fa-facebook"
            />
        </div>
    )
}

export default LoginFacebook