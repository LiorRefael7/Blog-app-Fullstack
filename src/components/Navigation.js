import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/postspage">Posts</Link>
        <Link to="/newpost">New Post</Link>
        <Link className="login-link" to="/login">
          Login
        </Link>
      </nav>
    );
  }
}

export default Navigation;
