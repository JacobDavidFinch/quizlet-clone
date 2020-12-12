import React, { useContext } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Home = ({ authStatus: string }) => {
    const auth: any = useSelector((state) => state, shallowEqual);
    console.log('here');
    console.log(auth);
    const AuthModal = ({ authStatus }) => <></>;

    return <div className='home-container'>{/* <AuthModal authStatus={authStatus} /> */}</div>;
};
