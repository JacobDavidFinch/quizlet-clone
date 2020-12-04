import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import { publicFetch } from '../utils/api/fetch';

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string().required(
//     'First name is required'
//   ),
//   lastName: Yup.string().required('Last name is required'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Email is required'),
//   password: Yup.string().required('Password is required')
// });

const Signup = () => {
    const authContext = useContext(AuthContext);
    const [signupSuccess, setSignupSuccess] = useState();
    const [signupError, setSignupError] = useState();
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const submitCredentials = async (credentials) => {
        try {
            setLoginLoading(true);
            const { data } = await publicFetch.post(`signup`, credentials);

            authContext.setAuthState(data);
            setSignupSuccess(data.message);
            setSignupError('');

            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 700);
        } catch (error) {
            setLoginLoading(false);
            const { data } = error.response;
            setSignupError(data.message);
            setSignupSuccess('');
        }
    };

    return (
        <>
            {redirectOnLogin && <Redirect to='/dashboard' />}
            <div className='modal active' id='modal-id'>
                <a href='#close' className='modal-overlay' aria-label='Close'></a>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <a href='#close' className='btn btn-clear float-right' aria-label='Close'></a>
                        <div className='modal-title h5'>Modal title</div>
                    </div>
                    <div className='modal-body'>
                        <div className='content'></div>
                    </div>
                    <div className='modal-footer'>...</div>
                </div>
            </div>
        </>
    );
};

export default Signup;
