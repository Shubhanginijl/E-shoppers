import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Nav from "./Pages/Nav";
import Register from "./Components/AuthComponent/Register";
import Login from "./Components/AuthComponent/Login";
import SingleProduct from "./Components/Product/singleProduct";
import Checkout from "./Components/Checkout/Checkout";
import Payment from './Components/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
let promise=loadStripe("pk_test_51KD1RDSEc3kfhScfvjWB6ADpvPepUTBwkj4nmGksfnwnd5M1P1y3AbB6khpUkzlWB3nMwpqYRCT0PPqDOxIkglPK00CpYfwjav")
const App = () => {
  return (
    <Router>
      <header>
        {/* <Nav /> */}
      </header>
      <ToastContainer />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={
        <Elements stripe={promise}><Payment/></Elements>}/>
      </Routes>
    </Router>
  );
};

export default App;
