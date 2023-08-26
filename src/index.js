import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AutoTwitchChat from './pages/AutoTwitchChat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>      
      <Header/>
      <Routes>
        <Route path="/editor-tools" element={<App />} />
        <Route path="/editor-tools/auto-twitch-chat" element={<AutoTwitchChat />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
