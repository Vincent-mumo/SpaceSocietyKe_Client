import React from 'react';
import LandingPage from './LandingPage';
import About from '../components/About';
import Events from '../components/Events';
import Objectives from '../components/Objectives';
import PostList from '../components/PostList';
import JoinUs from '../components/JoinUs';

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <About />
      <Events />
      <JoinUs/>
      <Objectives />
      <h1 className="text-4xl font-bold ml-[10px]">Latest Articles from our Members</h1>
      <PostList />
    </div>
  );
};

export default HomePage;