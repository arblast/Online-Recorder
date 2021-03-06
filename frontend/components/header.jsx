import React from 'react';
import { Link, hashHistory } from 'react-router';
import cloudinary from 'cloudinary-core';


const Header = (props) => {

  const cloud = cloudinary.Cloudinary.new(window.cloudinary_options);

  const handleSubmit = (e) => {
    e.preventDefault();
    hashHistory.push(`/search/${e.target.firstChild.value}`);
  }

  const returnHome = (e) => {
    e.preventDefault();
    hashHistory.push('/home');
  }

  const goToFavorites = (e) => {
    e.preventDefault();
    hashHistory.push('/favorites');
  }

  const goToNew = (e) => {
    e.preventDefault();
    hashHistory.push('/new');
  }


  window.onclick = (e) => {
    if(!e.target.matches('.profile') && !e.target.matches('.profile-icon') && !e.target.matches('#username')) {
      let menu = document.getElementById('profile-menu');
      let profile = document.getElementById('profile');
      if (menu && profile){
        menu.classList.remove('show');
        profile.classList.remove('focus');
      }
    }
  }

  const showMenu  = (e) => {
    if(!e.target.matches('#username')){
      document.getElementById('profile-menu').classList.toggle('show');
      document.getElementById('profile').classList.toggle('focus');
    }
  }

  const iconSrc = cloud.image("icon_uscmav.png").src;
  const navSrc = cloud.image("nav-icon.png").src;
  const profileSrc = props.currentUser.image_url;
  return (
    <div className='topbar'>
      <img className="nav-open" src={navSrc} onClick={props.toggleNav} />
      <img src={iconSrc} onClick={returnHome} className="header-icon"/>
      <h3 onClick={returnHome} className='logo-title'>Record Cloud</h3>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type='text' className='search-input' name='search' placeholder='Enter title, author, or category'></input>
        <input type='submit' value=""></input>
      </form>
      <Link className="new-recording-button" to="/new">New Recording</Link>
      <div onClick={showMenu} className='profile' id='profile'>
        <img src={profileSrc} className="profile-icon"/>
        <ul className='profile-menu' id='profile-menu'>
          <li id='username'>{props.currentUser.username}</li>
          <li onClick={props.handleLogout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
