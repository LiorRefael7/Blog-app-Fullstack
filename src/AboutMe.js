import React from 'react';
import Navigation from './Navigation';

function AboutMe() {
  const about = "Hi, I'm Lior Refael";

  return (
    <div>
      <p>{about}</p> 
      <div>
        <Navigation />
      </div>
        <p>{about}</p>  
    </div>
  );
}

export default AboutMe;
