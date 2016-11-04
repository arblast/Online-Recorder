import React from 'react';
import { hashHistory } from 'react-router';
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
      <div>
        <Header/>
        <h1>Hello, {this.props.currentUser.username} </h1>
        {this.props.children}
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;
