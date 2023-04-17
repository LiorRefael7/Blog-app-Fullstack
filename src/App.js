import React from 'react';
import Post from './Post';
import Navigation from './Navigation';
import PopularPosts from './PopularPosts';
import LatestsPosts from './LatestsPost';
import './style.css';


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
            <Post
              title="Post Title 1"
              text="Post text goes here"
              date="Published on April 1, 2023"
            />
            <Post
              title="Post Title 2"
              text="Post text goes here"
              date="Published on March 30, 2023"
            />
            <Post
              title="Post Title 3"
              text="Post text goes here"
              date="Published on March 27, 2023"
            />
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
