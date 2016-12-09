import React from 'react';
import { Link, hashHistory } from 'react-router';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setTab('browse');
  }

  render() {
    return (
      <div>
        Browse
      </div>
    )
  }
}

export default Browse;
