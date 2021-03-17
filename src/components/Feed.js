import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.scss';
import InputOption from './InputOption';
import { writeQuarter } from '../data';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input placeholder='Write a quarter' type='text' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          {writeQuarter.map((item) => {
            return <InputOption key={item.id} {...item} />;
          })}
        </div>
      </div>

      {posts.map((post, index) => {
        <Post key={index} />;
      })}

      <Post
        name='Dimitrios Chatziioannou'
        description='test'
        message='hello my alania how are you doing?'
      />
    </div>
  );
};

export default Feed;
