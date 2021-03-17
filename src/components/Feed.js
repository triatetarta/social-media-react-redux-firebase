import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.scss';
import InputOption from './InputOption';
import { postOptions } from '../data';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input placeholder='Write a quarter' type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          {postOptions.map((item) => {
            return <InputOption key={item.id} {...item} />;
          })}
        </div>
      </div>

      <Post
        name='Dimitrios Chatziioannou'
        description='test'
        message='hello my alania how are you doing?'
      />
    </div>
  );
};

export default Feed;
