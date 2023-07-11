import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import Order from "./Order";
const promise = loadStripe(
  "pk_test_51NRwSuSBW6xaIbHBTUsvZRbtlzLVCA1V51HLbhYW3diThKDEwMysjxq1LZuPobx6kg9md39LDkMk4a0470q21bio00EA9DukxE"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<><Header /><Order /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />

          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />

          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
