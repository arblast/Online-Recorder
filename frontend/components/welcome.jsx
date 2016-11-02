import React from 'react';
import { Link } from 'react-router';

const Welcome = ({children}) => {
  return(
    <div>
      <span className='welcome'>
        <h1>Welcome to Record Cloud!</h1>
        <h3 className='welcome-select'><Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link></h3>
        <br/>
        <h3 className='welcome-select'><Link to="/guest-login">Guest Login</Link></h3>
        </span>
      {children}
    </div>
  );
};

export default Welcome;
