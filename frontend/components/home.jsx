import React from 'react';
import { Link } from 'react-router';

const Home = ({ children }) => {
  return(
    <div>
      <h1>Welcome to Record Cloud!</h1>
      <Link to="login">Login</Link> or <Link to="login">Sign up</Link>
      {children}
    </div>
  );
};

export default Home;
