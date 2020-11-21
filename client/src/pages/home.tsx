import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from './../images/logo.png';

export const Home = ({authStatus: string}) => {
  const auth = useContext(AuthContext);

  const AuthModal = ({authStatus}) => (
    <>

    </>
  )

  return (
      <div className="home-container">
        <AuthModal authStatus={authStatus} />
      </div>
  );
};
