import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { publicFetch } from '../utils/api/fetch';
import { Redirect } from 'react-router-dom';

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
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = async credentials => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post(
        `signup`,
        credentials
      );

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
      {redirectOnLogin && <Redirect to="/dashboard" />}
      <div class="modal active" id="modal-id">
        <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
          <div class="modal-header">
            <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
            <div class="modal-title h5">Modal title</div>
          </div>
          <div class="modal-body">
            <div class="content">
            </div>
          </div>
          <div class="modal-footer">
            ...
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
