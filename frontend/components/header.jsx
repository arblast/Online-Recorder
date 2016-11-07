import React from 'react';
import { hashHistory } from 'react-router';
import { cloudinaryConfig, CloudinaryImage } from 'react-cloudinary';

cloudinaryConfig({
  cloud_name: 'record-cloud'
});

const Header = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const returnHome = (e) => {
    e.preventDefault();
    hashHistory.push('/home');
  }

  window.onclick = (e) => {
    if(!e.target.matches('.profile') && !e.target.matches('.profile-icon')) {
      let menu = document.getElementById('profile-menu');
      let profile = document.getElementById('profile');
      if (menu && profile){
        menu.classList.remove('show');
        profile.classList.remove('focus');
      }
    }
  }

  const showMenu  = (e) => {
    document.getElementById('profile-menu').classList.toggle('show');
    document.getElementById('profile').classList.toggle('focus');
  }

  return (
    <div className='topbar'>
      <CloudinaryImage className='header-icon' publicId={"icon_uscmav.png"} onClick={returnHome} />
      <form>
        <input type='text' name='search' placeholder='Search'></input>
        <button className='search-submit' onClick={handleSubmit} type='submit'></button>
      </form>
      <div onClick={showMenu} className='profile' id='profile'>
        <CloudinaryImage className='profile-icon' publicId={"profile.svg"}/>
        <ul className='profile-menu' id='profile-menu'>
          <li onClick={props.handleLogout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;