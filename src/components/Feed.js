import React, { useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.scss';
import InputOption from './InputOption';
import { writeQuarter } from '../data';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder='Write a quarter'
              type='text'
            />
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
      <FlipMove>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
