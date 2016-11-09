import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './header.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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
    return(
      <div className="home">
        <Header handleLogout={this.handleLogout} currentUser={this.props.currentUser}/>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
