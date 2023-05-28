import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PostsPage from './components/PostsPage';
import NewPost from './components/NewPost'
import PostPage from './components/PostPage'
import Login from './components/Login'
import './style.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navigation />
      <div className='app-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postspage" element={<PostsPage />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;