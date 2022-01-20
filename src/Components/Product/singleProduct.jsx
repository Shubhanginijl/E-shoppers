import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import { products } from '../../ProductData';
import { useDispatch } from 'react-redux';
import { AddBasket } from '../../Redux/Action/action';

const SingleProduct = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    let singleProduct = products.find((item) => item.id === id)
    
    const addToCart= () => {
        let item = {
            id: singleProduct.id,
            rating: singleProduct.rating,
            price: singleProduct.price,
            image: singleProduct.image,
        };
        dispatch(AddBasket(item))
}

    return (
      <>
      <Link to="/">
        <img
          src="eshoppers.png"
          alt="logo"
          className="login-logo mt-3 mb-3 object-contain w-[190px] mr-auto ml-auto "
        />
      </Link>
      <div className="flex">
        
        <img className="w-1/5 h-1/5 mt-6" src={singleProduct.image} alt="" />
        <div className="block mt-2 ml-10">
          <div className="font-bold text-2xl">{singleProduct.title}</div>
          <div className="mt-6 text-lg">
            <span>Rs</span>
            {singleProduct.price}
          </div>
          <div className="flex mt-6">
            {Array(singleProduct.rating)
              .fill()
              .map((_, index) => (
                <p
                  className="text-yellow-500 font-extrabold text-lg flex"
                  key={index}
                >
                  🤩
                </p>
              ))}
          </div>
          <div>
            <h1 className="mt-6 font-bold text2xl">Specification</h1>
            {singleProduct.specification &&
              singleProduct.specification.map((item, index) => (
                <li className="text-lg " key={index}>
                  {item}
                </li>
              ))}
          </div>
          <div className="text-lg">
            <h1 className="mt-6 font-bold text2xl">Description</h1>
            {singleProduct.detail}
          </div>
          <button
            className="bg-zinc-800 text-white w-32 h-10 mt-6 rounded-md"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      </>
    );
}

export default SingleProduct
