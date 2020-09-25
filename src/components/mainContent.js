import React, { useEffect } from 'react';
import '../styles/maincontent.css';
const MainContent = (props) => {
  const switchTabs = (idx) => {
    const buttons = document.querySelectorAll('.button-container button');
    const tabPanels = document.querySelectorAll('.tab-content');
    buttons.forEach((button) => {
      button.style.backgroundColor = '#21b8de';
      button.style.color = '#FFF';
    });
    tabPanels.forEach((panel) => {
      panel.style.display = 'none';
    });

    buttons[idx].style.backgroundColor = '#FFFFFF';
    buttons[idx].style.color = '#333';
    tabPanels[idx].style.display = 'block';
  };
  useEffect(() => {
    switchTabs(0);
  }, []);
  return (
    <div class='row row-cols-12 row-cols-md-12'>
      <div class='col mb-4'>
        <div class='card'>
          <img
            src='https://picsum.photos/300/400'
            class='img-fluid'
            alt='...'
          />
          <div class='card-body'>
            <div className='tab-container'>
              <div className='button-container'>
                <button
                  className='btn btn-secondary btn-sm'
                  onClick={() => switchTabs(0)}
                >
                  Tab1
                </button>
                <button
                  className='btn btn-secondary btn-sm'
                  onClick={() => switchTabs(1)}
                >
                  Tab2
                </button>
                <button
                  className='btn btn-secondary btn-sm'
                  onClick={() => switchTabs(2)}
                >
                  Tab3
                </button>
                <button
                  className='btn btn-secondary btn-sm'
                  onClick={() => switchTabs(3)}
                >
                  Tab4
                </button>
                <button
                  className='btn btn-secondary btn-sm'
                  onClick={() => switchTabs(4)}
                >
                  Tab5
                </button>
              </div>
              <div className='tab-content'>
                <h5 class='card-title'>Tab1</h5>
                <p class='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className='tab-content'>
                <h5 class='card-title'>Tab2</h5>
                <p class='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className='tab-content'>
                <h5 class='card-title'>Tab3</h5>
                <p class='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className='tab-content'>
                <h5 class='card-title'>Tab4</h5>
                <p class='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className='tab-content'>
                <h5 class='card-title'>Tab5</h5>
                <p class='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
