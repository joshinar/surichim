import React, { useState, useEffect } from 'react';
import '../styles/dropdown.css';

const Dropdown = ({ options }) => {
  return (
    <div className='dropdown-container'>
      {options && (
        <ul className='list-group'>
          <h4 className='text-center m-3 bg-light'>{options.name}</h4>
          {Object &&
            Object.keys(options.questions).map((key) => (
              <li className='list-group-item question bg-secondary text-white'>
                {options.questions[key]}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
