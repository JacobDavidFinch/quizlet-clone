import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/AuthContext';
import logo from './../images/logo.png';

const Home = ({authStatus: string}) => {
  const auth = useContext(AuthContext);

  const AuthModal = () => (
    <Modal>


    </Modal>
  )

  return (
    <>
      <div className="home-container">
        <AuthModal authStatus={authStatus} />
      </div>
    </Modal>
  );
};

export default Home;
