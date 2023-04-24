import React from 'react';
import Post from './Post';
import Navigation from './Navigation';
import PopularPosts from './PopularPosts';
import LatestsPosts from './LatestsPost';
import './style.css';
import PostsList from './PostsList';


function App() {
  return (
    <div className="container">
      <header>
        <h1>This is my blog</h1>
      </header>
      <Navigation />
      <div className="main-content">
        <div className="left-section">
          <div className="posts">
            <PostsList />
          </div>
        </div>
        <div className="right-section">
          <LatestsPosts latestText="Latest post text goes here" />
          <PopularPosts popularText="Popular post text goes here" />
        </div>
      </div>
    </div>
  );
}


export default App;
