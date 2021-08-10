import React from 'react';
import '../css/Login.css';
import { loginUrl } from '../config/spotufy';

const Login = props => {
    return (
        <div className="login">

            <img src="https://community.spotify.com/t5/image/serverpage/image-id/27289i6CB37DCE3D36368E/image-size/original?v=mpbl-1&px=-1" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTUFY</a>
        </div>

    )
}

export default Login
