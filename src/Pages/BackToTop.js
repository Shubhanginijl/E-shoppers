import React, { useState, useEffect } from "react";
import {BsFillArrowUpSquareFill} from "react-icons/bs"

const BacktoTop = () => {
  let [isVisible, setIsVisible] = useState(false);
  let visibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  let scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", visibility);
    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <div onClick={scrollTop} className="mt-4 mx-[1400px]">
          <BsFillArrowUpSquareFill className="w-20  h-[90px] rounded-md items-end flex text-black p-3" />
        </div>
      )}
    </div>
  );
};

export default BacktoTop;