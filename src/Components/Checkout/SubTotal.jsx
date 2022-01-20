import React from "react";
// import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from './BasketTotal';
import CurrencyFormat from "react-currency-format";


const SubTotal = () => {
  let { basket, user } = useSelector(state => state.reducer);
  let dispatch = useDispatch(state => state.reducer);
  let navigate = useNavigate();
  let handleChecked = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };
    return (
      <div className="flex ml-[400px] mt-16">
        <div className="shadow-2xl shadow-white-100  h-28 rounded-md text-black text-lg w-[90%]">
          <CurrencyFormat
            renderText={value => (
              <>
                <p className="px-3 mt-3">
                 <strong>SubTotal({basket.length} items)</strong> :<strong>{value}</strong>
                </p>
                <small className="px-2">
                  <input type="checkbox" />
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
          <button className="bg-gray-500 text-white p-1 mt-4 rounded-md" onClick={handleChecked}>Proceed to Checkout</button>
        </div>
      </div>
    );
};

export default SubTotal;
