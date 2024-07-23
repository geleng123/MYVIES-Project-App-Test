import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WatchedList from './components/WatchedList';
import { GlobalProvider } from './context/GlobalState';
import './index.css';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/WatchedList" element={<WatchedList />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;