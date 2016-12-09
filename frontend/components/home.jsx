import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './header.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      selectedTab: null,
      navOpen: true
    }
    this.setTab = (tab) => {
      this.setState({selectedTab: tab})
    }
    this.toggleNav = () => {
      this.setState({navOpen: this.state.navOpen ? false : true})
    }
    this.navStyle = this.navStyle.bind(this);
    this.homeElStyle = this.homeElStyle.bind(this);
  }

  navStyle() {
    if (this.state.navOpen) {
      return { left: '0px' }
    } else {
      return { left: '-202px'}
    }
  }

  homeElStyle() {
    if (this.state.navOpen) {
      return { width: 'calc(100% - 200px)', left: '200px' };
    } else {
      return { width: '100%', left: '0px' };
    }
  }

  shouldComponentUpdate(nextProps){
    let result = true;
    if(nextProps.currentUser === null) {
      hashHistory.push('/');
      result = false;
    }
    return result;
  }


  handleLogout(e) {
    this.props.logout();
  }


  render() {
    let homeSelected = null;
    let favoritesSelected = null;
    let browseSelected = null;
    switch (this.state.selectedTab) {
      case "home":
        homeSelected = 'selected';
        break;
      case "favorites":
        favoritesSelected = 'selected';
        break;
      case "browse":
        browseSelected = 'selected';
        break;
      default:
        break;
    }
    return(
      <div className="home">
        <Header handleLogout={this.handleLogout} currentUser={this.props.currentUser} searchRecordings={this.props.searchRecordings} toggleNav={this.toggleNav}/>
        <div className='nav' style={this.navStyle()}>
          <span className="nav-close" onClick={this.toggleNav}>x</span>
          <ul className='nav-list'>
            <li><Link className={browseSelected} to='/browse'>Browse</Link></li>
            <li><Link className={homeSelected} to='/home'>My Recordings</Link></li>
            <li><Link className={favoritesSelected} to='/favorites'>My Favorites</Link></li>
          </ul>
        </div>
        <div className="home-el" style={this.homeElStyle()}>
          {React.cloneElement(this.props.children, {setTab: this.setTab})}
        </div>
      </div>
    );
  }
}

export default Home;
