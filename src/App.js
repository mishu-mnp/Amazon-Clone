import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/checkout'
            element={<>
              <Checkout />
            </>}>
          </Route>
          <Route path='/'
            element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
