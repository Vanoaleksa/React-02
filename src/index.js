import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: '1', message: 'Visca el Barca!', likecounts: '100' },
  { id: '2', message: 'Visca el Catalunya!', likecounts: '30' },
]

let dialogs = [
  { id: '1', name: 'Lionel' },
  { id: '2', name: 'Suares' },
  { id: '3', name: 'Neymar' },
  { id: '4', name: 'Ronaldinho' },
  { id: '5', name: 'Ter Stegen' },
  { id: '6', name: 'Griezman' }
]

let messages = [
  { id: '1', message: 'F*ck Real!' },
  { id: '2', message: 'We are champions!' },
  { id: '3', message: 'Do you smoke?' }
]
ReactDOM.render(
  
  <React.StrictMode>
    
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
