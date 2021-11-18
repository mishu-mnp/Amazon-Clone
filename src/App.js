import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // it will run only once when the app component loads

    onAuthStateChanged(auth, (authUser) => {
      // console.log('AUTH USER >>> ', authUser)

      if (authUser) {
        // the user is just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout'
            element={<>
              <Header />
              <Checkout />
            </>}>
          </Route>
          <Route path='/login'
            element={<>
              <Login />
            </>}>
          </Route>
          <Route path='/'
            element={<>
              <Header />
              <Home />
            </>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
