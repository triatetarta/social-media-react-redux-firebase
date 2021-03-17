import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import { navOptions } from '../data';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
          alt='three quarters logo'
        />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        {navOptions.map((option) => {
          return <HeaderOption key={option.id} {...option} />;
        })}
      </div>
    </div>
  );
};

export default Header;
