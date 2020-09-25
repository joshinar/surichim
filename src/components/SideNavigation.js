import React, { useEffect } from 'react';
import '../styles/navigation.css';

const SideNavigation = ({ mutateOptions }) => {
  const hnrOptions = {
    name: 'HNR',
    questions: {
      q1: 'HNR ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const cccOptions = {
    name: 'CCC',
    questions: {
      q1: 'CCC ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const bstcOptions = {
    name: 'BSTC',
    questions: {
      q1: 'BSTC ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q5: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q6: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q7: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q8: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q9: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q10: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q11: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q12: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q13: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q198: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const bapOptions = {
    name: 'BAP',
    questions: {
      q1: 'BAP ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const kycOptions = {
    name: 'KYC',
    questions: {
      q1: 'KYC ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  const otherOptions = {
    name: 'Others',
    questions: {
      q1: 'Other ipsum, dolor sit amet consectetur adipisicing elit. Veniam',
      q2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam',

      q3: 'question3?',
      q4: 'question4?',
      q5: 'question5?',
    },
  };
  return (
    <div className='side-navigation'>
      <button onClick={() => mutateOptions(hnrOptions)}>Option1</button>
      <button onClick={() => mutateOptions(cccOptions)}>Option2</button>
      <button onClick={() => mutateOptions(bstcOptions)}>Option3</button>
      <button onClick={() => mutateOptions(bapOptions)}>Option4</button>
      <button onClick={() => mutateOptions(kycOptions)}>Option5</button>
      <button onClick={() => mutateOptions(otherOptions)}>Option6</button>
    </div>
  );
};

export default SideNavigation;
