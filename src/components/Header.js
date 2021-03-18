import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import { navOptions } from '../data';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
          alt='three quarters logo'
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        {navOptions.map((option) => {
          return (
            <HeaderOption key={option.id} {...option} onClick={logoutOfApp} />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
