import './App.css';
import Header from '../src/Header';
import Home from '../src/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from '../src/Login';
import { useStateValue } from '../src/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from '../src/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from '../src/Orders';

const promise = loadStripe(
  "pk_test_51LzG6oFhQ7SfnPAczKFtBgqjWyPJnxyWFjVfDP3f7VpvIM3jSisM7zac9ohHW1f4habCCJB1fJqKdfZ1ElVIwTkN00BlcNJFjZ"
);

// function App() {
//   const [{}, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       // console.log("THE USER IS >>> ", authUser);
//       if (authUser) {
//         // the user just logged in / the user was logged in

//         dispatch({
//           type: 'SET_USER',
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: 'SET_USER',
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/orders">
//             <Header />
//             <Orders />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/payment">
//             <Elements stripe={promise}>
//               <Payment />
//             </Elements>
//           </Route>
//           <Route path="/checkout">
//             <Header />
//             <Checkout />
//           </Route>
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
              {/* <Footer /> */}
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;