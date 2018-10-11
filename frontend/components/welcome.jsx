import React from 'react';
import { Link } from 'react-router';

const VERSE = "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.";

const Welcome = ({children}) => {
  return(
    <div className='splash'>
      <img className='awana-logo' src='https://res.cloudinary.com/record-cloud/image/upload/v1539218726/awanaym-logo_wvpa5u.png'/>
      <div className='title'>
        <h1>WELCOME TO RECORD CLOUD!</h1>
        <h2 className='tagline'>Record and share your verses for Awana!</h2>
      </div>
      <div className='verse'>
        <p>{VERSE}</p>
        <div className='verse-bot'>2 Timothy 3:16-17</div>
      </div>
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
