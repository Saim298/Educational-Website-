import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, VideoUpload, Dashboard, BecomeInstructor, MentorPages } from './pages';
import Navbar from './components/HomeComponenets/Navbar';
import Signup from './components/signup'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/video" element={<VideoUpload />} />
          <Route path="/becomeInstructor" element={<BecomeInstructor />} />
          <Route path="/mentor" element={<MentorPages />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
