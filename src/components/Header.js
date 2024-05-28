import { LOGO_url } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("LogIn");
  const onlinestatus = useOnlineStatus();

  //console.log("header");
  return (
    <div className="flex justify-between shadow-lg">
      <div className="p-3">
        <img className="w-24" src={LOGO_url} />
      </div>
      <div className="p-4 m-8">
        <ul className="flex">
          {
            <li className="px-4">
              Online Status: {onlinestatus ? "✅" : "🔴"}
            </li>
          }
          <li className="px-4  hover:text-red-500 active:text-red-800  link-underline link-underline-black">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-red-500 active:text-red-800  link-underline link-underline-black">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:text-red-500 active:text-red-800 hidden sm:block  link-underline link-underline-black">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-red-500 active:text-red-800 hidden sm:block  link-underline link-underline-black">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4  hover:text-red-500 active:text-red-800 hidden sm:block  link-underline link-underline-black">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="w-20 mt-[-8px] h-10 text-center  text-white rounded-lg bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 ..."
            onClick={() => {
              btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
