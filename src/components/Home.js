import '../style.css';
import React from 'react';
import LatestsPosts from './LatestsPost';
import PopularPosts from './PopularPosts';
import PostsList from './PostsList';


class Home extends React.Component {
    render() {
        return (
            <div className="container">
            <header>
            <h1>This is my blog</h1>
            </header>
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
}

export default Home;