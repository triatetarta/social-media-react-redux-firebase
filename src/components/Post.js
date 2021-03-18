import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import PostOption from './PostOption';
import { postOptions } from '../data';
import './Post.scss';

const Post = forwardRef(
  ({ data: { name, description, message, photoUrl } }, ref) => {
    return (
      <div ref={ref} className='post'>
        <div className='post__header'>
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className='post__body'>
          <p>{message}</p>
        </div>

        <div className='post__buttons'>
          {postOptions.map((option) => {
            return <PostOption key={option.id} {...option} />;
          })}
        </div>
      </div>
    );
  }
);

export default Post;
