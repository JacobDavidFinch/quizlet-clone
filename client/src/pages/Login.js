import React, { useState, useContext } from 'react';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { publicFetch } from './../util/fetch';
import { Redirect } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const Login = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = async credentials => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post(
        `authenticate`,
        credentials
      );

      authContext.setAuthState(data);
      setLoginSuccess(data.message);
      setLoginError(null);

      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/dashboard" />}
      <section className="w-full sm:w-1/2 h-screen m-auto p-8 sm:pt-10">
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
              <div>
                <div className="w-32 m-auto mb-6">
                </div>
                <h2 className="mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900">
                  Log in to your account
                </h2>
                <p className="text-gray-600 text-center">
                  Don't have an account?{' '}
                </p>
              </div>
                        </div>
          </div>
      </section>
    </>
  );
};

export default Login;
