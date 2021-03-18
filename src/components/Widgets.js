import React from 'react';
import './Widgets.scss';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon />
        </div>
        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='widgets'>
      <div className='widgets__Header'>
        <h2>Quarter News</h2>
        <RssFeedIcon />
      </div>
      {newsArticle('Three Quarters is back', 'Top news - 1.2M readers')}
      {newsArticle('Covid-19: UK Updates', 'Top news - 10.9M readers')}
      {newsArticle('Tesla hits new highs', 'Cars & Auto - 5.6K readers')}
      {newsArticle('Dimitris is hirable', 'Breaking - 60.9M readers')}
      {newsArticle('Restaurants are reopening', 'Local news - 20.9K readers')}
      {newsArticle('Is React the King Tech?', 'Tech - 32.9K readers')}
    </div>
  );
};

export default Widgets;
