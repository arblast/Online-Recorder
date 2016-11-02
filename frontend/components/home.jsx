import React from 'react';
import { withRouter } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout(e) {
    this.props.logout();
    this.props.router.push("/");
  }


  render() {
    return(
      <div>
        <h1>Hello, {this.props.currentUser.username} </h1>
        {this.props.children}
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Home);
