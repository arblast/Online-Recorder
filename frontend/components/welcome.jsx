import React from 'react';
import { Link } from 'react-router';

const Welcome = ({children}) => {
  return(
    <div className='splash'>
      <h1>WELCOME TO RECORD CLOUD!</h1>
      <section className='welcome'>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGN UP</Link>
        <Link to="/guest">GUEST LOGIN</Link>
      </section>
      {children}
    </div>
  );
};

export default Welcome;
