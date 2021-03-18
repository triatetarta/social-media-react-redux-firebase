import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const trendingItem = (topic) => {
    return (
      <div className='sidebar__trendingItem'>
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src={process.env.PUBLIC_URL + '/assets/threequarters.png'}
          alt='top background'
        />
        <Avatar src={user?.photoUrl} className='sidebar__avatar'>
          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Following: </p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Followers: </p>
          <p className='sidebar__statNumber'>4,453</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p className='sidebar__bottomTitle'>Trending</p>
        {trendingItem('reactjs')}
        {trendingItem('html')}
        {trendingItem('sass')}
        {trendingItem('gatsbyjs')}
        {trendingItem('juniordeveloper')}
        {trendingItem('shopify')}
      </div>
    </div>
  );
};

export default Sidebar;
