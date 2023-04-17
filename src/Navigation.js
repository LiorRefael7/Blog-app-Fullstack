import React, { Component } from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Contact me</a>
        <a className="login-link" href="#">
          Log in
        </a>
      </nav>
    );
  }
}

export default Navigation;