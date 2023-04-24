import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Aboutme">About me</Link>
        <Link to="#">Contact me</Link>
        <Link className="login-link" to="#">
          Log in
        </Link>
      </nav>
    );
  }
}

export default Navigation;
