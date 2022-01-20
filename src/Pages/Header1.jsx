import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser} from "react-icons/fa"
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import AuthReducer from './../Redux/Reducer/AuthReducer';

const Header1 = () => {
  let cartData=useSelector(state=>state.AuthReducer.basket);
  return (
    <nav className=" bg-[#333333] h-16 w-full">
      <div className=" w-[95%] m-auto flex">
        <ul className="  flex  basis-3/4 items-center  justify-start h-16 list-none">
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px]  text-[16px] font-bold hover:text-yellow-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Electronics
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Home Sensor
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Laptop
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Drones
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              Headphone
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[26px] text-[16px] font-bold hover:text-yellow-400"
            >
              More
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Header1;