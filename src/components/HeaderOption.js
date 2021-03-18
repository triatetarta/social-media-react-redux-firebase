import React from 'react';
import { Avatar } from '@material-ui/core';
import './HeaderOption.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar
          onClick={onClick}
          className='headerOption__icon'
          src={user?.photoUrl}
        >
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
