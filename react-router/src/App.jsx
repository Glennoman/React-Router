import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SinglePost from './pages/SinglePost';
import Comments from './pages/Comments';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<SinglePost />}>
            <Route path="comments" element={<Comments />} />
          </Route>
        </Routes>
      </div>
      <div>
      </div>
    </Router>
  );
};

export default App;
