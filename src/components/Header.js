import React, { Fragment, useState, useEffect } from 'react';
const short = require('short-uuid');

const Header = () => {
  const [taskId, setTaskId] = useState('');
  const [action, setAction] = useState('');
  const onsubmit = () => {
    if (taskId == '') {
      document.querySelector('.header-alert').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.header-alert').style.display = 'none';
      }, 3000);
    } else {
      alert(`Please save your ticked ID: ${short.generate()}`);
      setTaskId('');
      setAction('pass');
    }
  };
  useEffect(() => {
    setAction('pass');
  });
  return (
    <Fragment>
      <div class='alert alert-danger mr-4 header-alert' role='alert'>
        Please enter a task id and select an action.
      </div>
      <form className='form-inline'>
        <div className='form-group mb-2'>
          <input
            type='text'
            className='form-control'
            placeholder='Task ID'
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
          />
        </div>
        <div className='form-group mx-sm-3 mb-2'>
          <select
            class='custom-select'
            onChange={(e) => setAction(e.target.value)}
          >
            <option value='pass'>Pass</option>
            <option value='block'>Block</option>
            <option value='fraud'>Fraud</option>
          </select>
        </div>
        <div className='form-group mx-sm-3 mb-2'>
          <select
            class='custom-select'
            onChange={(e) => setAction(e.target.value)}
          >
            <option value='pass'>IN</option>
            <option value='block'>US</option>
            <option value='fraud'>UK</option>
          </select>
        </div>
        <button
          type='submit'
          className='btn btn-submit mb-2'
          onClick={() => onsubmit()}
        >
          Submit
        </button>
        <button
          type='submit'
          className='btn btn-submit mb-2'
          onClick={() => onsubmit()}
        >
          Radar reequest
        </button>
      </form>
    </Fragment>
  );
};

export default Header;
