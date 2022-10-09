import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tweet } from 'react-twitter-widgets';
import ShowTweets from './components/showTweets';

function App() {
  return (
    <div className="App">
      {/* <UrlBasic /> */}
      <ShowTweets />
    </div>
  );
}

export const UrlBasic = () => (
  <Tweet tweetId={'1139878843345281025'}  />
);
export default App;
