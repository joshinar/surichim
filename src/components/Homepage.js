import React, { useState, useEffect } from 'react';
import '../styles/homepage.css';
import SideNavigation from './SideNavigation';
import Header from './Header';
import Dropdown from './Dropdown';
import MainContent from './mainContent';
const Homepage = () => {
  const initalState = {
    name: 'HNR',
    questions: {
      q1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const [options, setOptions] = useState(initalState);

  const mutateOptions = (obj) => {
    setOptions(obj);
  };
  return (
    <div className='home-container'>
      <div className='main-content'>
        <div className='content-header'>
          <Header></Header>
        </div>
        <div className='content-body'>
          <MainContent></MainContent>
          <Dropdown options={options}></Dropdown>
        </div>
      </div>
      <SideNavigation mutateOptions={mutateOptions}></SideNavigation>
    </div>
  );
};

export default Homepage;
