import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './Utilities/App.css'

import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'

const App = () => (
  <div className="app">
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element = {<Join/>} />
          <Route path="/chat" element = {<Chat/>} />
        </Routes>
      </div>
    </Router>
  </div>
  
);

export default App;
