import React from 'react'
import { headerItems, products } from '../ProductData';
import { Fragment } from 'react';
import Slider from './Sliders/Slider'
import {BiUpArrowAlt} from "react-icons/bi"
import Product from './../Components/Product/Product';
import BacktoTop from './BackToTop';
import Nav from "../Pages/Nav";



const Home = () => {
    return (
      <Fragment>
        <div>
         
           <Nav/>
          <div className="-mt-2">
            <Slider />
            <div className="flex justify-between flex-wrap border-8">
              {products.slice(0, 5).map(item => (
                <Product
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
                    <div>{<BacktoTop />} {<BiUpArrowAlt/>}</div>
          </div>
        </div>
      </Fragment>
    );
}

export default Home
