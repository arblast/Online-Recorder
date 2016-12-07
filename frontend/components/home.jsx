import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './header.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      selectedTab: null,
      openNav: false
    }
    this.setTab = (tab) => {
      this.setState({selectedTab: tab})
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
    let newSelected = null;
    switch (this.state.selectedTab) {
      case "home":
        homeSelected = 'selected';
        break;
      case "favorites":
        favoritesSelected = 'selected';
        break;
      case "new":
        newSelected = 'selected';
        break;
      default:
        break;
    }
    return(
      <div className="home">
        <Header handleLogout={this.handleLogout} currentUser={this.props.currentUser} searchRecordings={this.props.searchRecordings}/>
        <div className='nav'>
          <ul className='nav-list'>
            <li><Link className={homeSelected} to='/home'>My Recordings</Link></li>
            <li><Link className={favoritesSelected} to='/favorites'>My Favorites</Link></li>
            <li><Link className={newSelected} to='/new'>New Recording</Link></li>
          </ul>
        </div>
        <div className="home-el">
          {React.cloneElement(this.props.children, {setTab: this.setTab})}
        </div>
      </div>
    );
  }
}

export default Home;
