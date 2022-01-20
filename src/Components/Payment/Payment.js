import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
// import CurrencyFormat from "react-currency-format";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase";
import CheckoutProduct from './../Checkout/CheckoutData';
import { getBasketTotal } from './../Checkout/BasketTotal';
import CurrencyFormat from "react-currency-format";
import { CardElement,useStripe,useElements } from "@stripe/react-stripe-js";
import axios from "axios";
const Payment = () => {
  
  const handleChange=(e)=>{
   setDisabled(e.empty);
   setError(e.error ? e.error.message:"");

  };
  let { basket, user } = useSelector((state) => state.reducer);
  
  let dispatch=useDispatch();
  let navigate=useNavigate();
  const [succeeded,setSucceeded]=useState(false);
  const [processing,setProcessing]=useState("");
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClientSecret]=useState(true);

  useEffect(()=>{
    const getClientSecret = async () =>{
      const response = await axios({
        method:"POST",
        url:`/payment/create?total=${getBasketTotal(basket)*100}`,
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[basket]);

  const stripe=useStripe();
  const elements=useElements();
  
  let handleSubmit =async e => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({payment_intent})=>{
      // ....
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      navigate("/orders")
    })
  };
  return (
    <div>
      <div className="relative mx-5">
        <h1 className="text-2xl font-bold mt-1">Payment Details</h1>
        <h1 className="font-bold text-lg">
          Checkout:{<Link to="/checkout">{basket.length} items</Link>}
        </h1>
        <div>

         
          <div>
            <span>
              <h3>Delivery Address:</h3>
              <p>{user && user.email}</p>
              <p>BTM Layout, 2nd stage</p>
              <p>Bangalore</p>
            </span>
          </div>
          <div>
            <div>
              <h3>Review items and Delivery</h3>
            </div>
            <div>
              {basket &&
                basket.map(item => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
          </div>

          
          <div className="relative">
            <h3 className="font-bold mt-3">Payment Method</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div>
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <h3 className="font-bold">Order Total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs."}
                />
              </div>
              <button  className="bg-black text-white p-2 rounded-md mt-5" disabled={processing||disabled||succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
