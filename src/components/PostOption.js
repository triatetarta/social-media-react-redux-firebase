import React from 'react';
import './PostOption.scss';

const PostOption = ({ title, Icon }) => {
  return (
    <div className='postOption'>
      {Icon && <Icon className='postOption__icon' />}
      <h3 className='postOption__title'>{title}</h3>
    </div>
  );
};

export default PostOption;
