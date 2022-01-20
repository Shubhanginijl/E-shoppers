import React from "react";
import { useDispatch } from "react-redux";
import { removeBasket } from "../../Redux/Action/action";
import { Link } from 'react-router-dom';

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  let dispatch = useDispatch();
  let removeItem = () => {
    dispatch(removeBasket(id));
  };
  return (
    <>
{/* <Link to="/">
        <img
          src="eshoppers.png"
          alt="logo"
          className="login-logo mt-3 mb-3 object-contain w-[190px] mr-auto ml-auto "
        />
      </Link> */}
    <div className="flex felx-wrap justify-center items-center border-2 shadow-lg bg-gray-200">
      <div className="flex justify-center items-center w-4/5">
        <img src={image} alt="" className="w-80 h-60 p-4" />
        <div>
          <p className="px-2">{title}</p>
          <p className="px-2">Rs:{price}</p>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p
                  className="text-yellow-500 font-extrabold text-lg flex "
                  key={index}
                >
                  ⭐
                </p>
              ))}
          </div>
          <button
            onClick={removeItem}
            className="bg-black rounded-md p-2 mt-4 text-white"
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
    </>

  );
};

export default CheckoutProduct;
