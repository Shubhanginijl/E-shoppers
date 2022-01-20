import React from "react";
import {BsSearch, BsHandbag} from "react-icons/bs"
import { IoMdCloudDownload } from "react-icons/io"
import { FaUserAlt } from "react-icons/fa";
import {RiLoginCircleLine}  from "react-icons/ri"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

// import Header1 from "../../../Redux/Pages/Header1";


const Nav = () => {
  let basket = useSelector(state => state.reducer.basket);
    return (
      <>
     <section className='bg-zinc-800 h-10 -mt-2 w-full flex my-2 shadow-md'>
            <article className='w-4/5 mx-auto h-10 flex justify-between items-center'>
            <div className="text-white">
            <p>Free shipping on domestic orders over $150</p>
          </div>
          <div className="text-white">
            <ul className="flex p-2">
              <li className="mx-4">language</li>|
              <li className="mx-4">$Currency</li>|
              <li className="mx-4">Customer Service: 000-000-0000</li>
            </ul>
          </div>
            </article>
        </section>
        {/* main block */}
        <section
          id="navBlock" className="bg-black h-16 -mt-2"
        >
          <article className="w-4/5 m-auto h-16 flex justify-between items-center">
            <div className="w-1/4">
              <div className="logo text-white text-xl font-bold hover:text-gray-300">
                <Link to="/">
                  <img
                    src="eshoppers.png"
                    alt="logo"
                    className="login-logo mt-3 mb-5 object-contain w-[150px] mr-auto ml-auto  "
                  />
                </Link>
              </div>
            </div>

            <div className="w-4/5 flex justify-center">
              <form className="w-4/5 flex justify-center position:relative">
              <input
                type="search"
                placeholder="SEARCH FOR PRODUCTS"
                className="w-full h-8 rounded-md p-4"
              />
              <span>
                <BsSearch  className="position:absolute  mt-1 -ml-8 w-6 h-5" />
              </span>
              </form>
            </div>
            <div className="w-1/2 flex basis-1/5 justify-end items-end ">
              <div className="menu">
                <nav>
                  <ul className="flex items-end list-none  text-white">
                    <li className="p-4">
                      <a
                        href="/login"
                        className="no-underline text-white  items- center"
                      >
                        <div className="flex">
                          <span>
                            <FaUserAlt className="text-orange-500 text-2xl" />
                          </span>
                          <span className="px-3 "> LogIn</span>
                        </div>
                      </a>
                    </li>
                    <li className="p-4">
                      <a
                        href="/register"
                        className="no-underline text-white  items-center "
                      >
                        <div className="flex">
                          <span className="text-orange-500 text-2xl">
                            <RiLoginCircleLine />
                          </span>
                          <span>Register</span>
                        </div>
                      </a>
                    </li>
                    <li className="ml-4 ">
                      <div className="flex">
                        <span className="mt-2 -mx-1">MyCart</span>
                        <Link
                          to="/checkout"
                          className="no-underline text-white px-2"
                        >
                          <BsHandbag className="text-3xl text-orange-400 mb-4" />

                        </Link>
                        <sup className=" text-sm -mx-1">
                          {basket && basket.length}
                        </sup>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </article>
        </section>
       {/* 3rd navbar */}
        
        <nav className=" bg-[#333333] h-16 w-full">
      <div className=" w-[95%] m-auto flex">
        <ul className="  flex  basis-3/4 items-center justify-start h-14 list-none">
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px]  text-[16px] font-bold hover:text-yellow-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Electronics
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Home Sensor
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Laptop
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Speakers
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Drones
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              Headphone
            </a>
          </li>
          <li>
            <a
              href="/"
              className=" no-underline text-white mx-[24px] text-[16px] font-bold hover:text-yellow-400"
            >
              More
            </a>
          </li>
        </ul>
        <div className="m-auto flex">
              <span className="text-white text-2xl text-orange-500">
                <IoMdCloudDownload />
              </span>
              <h1 className="text-white mr-10">
                Shopping made easy | Download App
              </h1>
            </div>
      </div>
    </nav>
      </>
    );
};

export default Nav;
