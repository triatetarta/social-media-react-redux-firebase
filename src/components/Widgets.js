import React from 'react';
import './Widgets.scss';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__Header'>
        <h2>Quarter News</h2>
        <RssFeedIcon />
      </div>
    </div>
  );
};

export default Widgets;
