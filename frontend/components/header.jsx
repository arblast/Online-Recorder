import React from 'react';

const Header = (props) => {

  return (
    <div className='topbar'>
      <form>
        <input type='text' name='search' placeholder='Enter name of recording...'></input>
        <input className='search-button' src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png" name='submit' type='image'></input>
      </form>
    </div>
  );
};

export default Header;
