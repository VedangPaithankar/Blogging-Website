import './App.css';
import React from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import ViewBlog from './pages/ViewBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlog from './pages/AddBlog';
import Blogs from './pages/Blogs';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/view-blog" element={<ViewBlog />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;