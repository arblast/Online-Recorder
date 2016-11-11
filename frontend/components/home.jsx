import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './header.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.newRecordingButton = <Link className="new-recording-button" to="/new">New Recording</Link>;
    this.state = {
      selectedTab: null
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
        <Header handleLogout={this.handleLogout} currentUser={this.props.currentUser}/>
        <br/>
        <div className='nav'>
          <Link className={homeSelected} to='/home'>My Recordings</Link>
          <Link className={favoritesSelected} to='/favorites'>My Favorites</Link>
          <Link className={newSelected} to='/new'>New Recording</Link>
        </div>
        <br/>
        <div>
          {React.cloneElement(this.props.children, { newRecordingButton: this.newRecordingButton, setTab: this.setTab})}
        </div>
      </div>
    );
  }
}

export default Home;
