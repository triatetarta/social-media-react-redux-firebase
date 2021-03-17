import React from 'react';
import './InputOption.scss';

const InputOption = ({ title, Icon }) => {
  return (
    <div className='inputOption'>
      {Icon && <Icon className='inputOption__icon' />}
      <h3 className='inputOption__title'>{title}</h3>
    </div>
  );
};

export default InputOption;
