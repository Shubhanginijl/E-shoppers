import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutData";
import SubTotal from "./SubTotal";
import { Link } from 'react-router-dom';

const Checkout = () => {
  let { basket, user } = useSelector(state => state.reducer);
  return (
    <>
     <Link to="/">
        <img
          src="eshoppers.png"
          alt="logo"
          className="login-logo mt-3 mb-3 object-contain w-[190px] mr-auto ml-auto "
        />
      </Link>
    <div className="flex p-4">
      <div className="left font-bold text-xl">
        <h3>Hello{user?.email}</h3>
        <h2>{basket.length === 0 ? "your cart is empty" : "Check your cart now"}</h2>
        
        <div className="w-full ml-[400px] h-32">
          {basket &&
            basket.map(item => (
              <CheckoutProduct
                
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
        </div>
      <div className="right w-[80%] h-32 ml-8">
        <SubTotal />
      </div>
    </div>
    </>
  );
};

export default Checkout;
