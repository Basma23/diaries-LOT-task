import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FeedComponent, PostsComponent, PostDetailComponent} from './posts'

const appElement = document.getElementById('root')
if(appElement){
  ReactDOM.render(
      <App />,
      appElement
  ); 
}
const element = React.createElement
const postsElement = document.getElementById('diaries')
if(postsElement){
  ReactDOM.render(
    element(PostsComponent, postsElement.dataset), postsElement
  ); 
}
const postsFeedElement = document.getElementById('diaries-feed')
if(postsFeedElement){
  ReactDOM.render(
    element(FeedComponent, postsFeedElement.dataset), postsFeedElement
  ); 
}
const postDetailElements = document.querySelectorAll('.diaries-detail')
postDetailElements.forEach(container => {
  ReactDOM.render(
    element(PostDetailComponent, container.dataset), container
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
