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
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51JxT9vSJ1r5r4aiibwGA6a1cL8zqL1kdxbJrkoM1OYc449jLXRN7qjFOr2KoZcxiPbfpUOzDNmNqclCe3OvGKZxt00FrEIEZ9M'
);

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
          <Route path='/payment'
            element={<>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
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
