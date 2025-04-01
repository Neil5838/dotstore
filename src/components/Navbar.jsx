import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBtn = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const { cartItems } = useSelector((store) => store.cart);

  return (
    <nav className="shadow">
      <div className="max-w-6xl w-[90vw] mx-auto sm:flex sm:justify-between sm:items-center p-0 sm:py-4">
        <div className="flex items-center justify-between py-4 sm:p-0 w-full">
          <Link to="/" onClick={closeNavbar}>
            <img
              className="w-[120px] h-auto -ml-3.5"
              src="https://www.names.co.uk/blog/wp-content/uploads/2018/05/dotSTORE.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              className="font-semibold tracking-wider text-gray-600 relative sm:hidden"
              to="/carts"
            >
              <GiShoppingBag className="text-2xl hover:scale-110 duration-300 transition-all" />
              <span className="text-sm w-[18px] h-[18px] bg-cyan-700 text-white flex justify-center items-center rounded-full absolute -top-1 -right-1 font-bold animate-bounce">
                {cartItems.length}
              </span>
            </Link>
            {isOpen ? (
              <button
                onClick={closeNavbar}
                className="block sm:hidden text-2xl text-black cursor-pointer"
              >
                <FaXmark />
              </button>
            ) : (
              <button
                onClick={toggleNavBtn}
                className="block sm:hidden text-2xl text-black cursor-pointer"
              >
                <FaBarsStaggered />
              </button>
            )}
          </div>
        </div>

        {/* for smaller screen */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } text-center bg-gray-100 py-8 transition-all duration-300 ease-in-out absolute w-full sm:-top-full left-0`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                onClick={closeNavbar}
                className="font-semibold tracking-wider text-gray-600"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNavbar}
                className="font-semibold tracking-wider text-gray-600"
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
          <Link
            onClick={closeNavbar}
            className="mt-8 inline-block bg-cyan-600 text-white py-0.5 px-4 rounded-full font-semibold uppercase text-sm"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        {/* for bigger screen */}

        <div className="hidden sm:flex sm:justify-center sm:items-center sm:gap-12">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                className="font-semibold tracking-wider text-gray-600"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold tracking-wider text-gray-600"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <Link
                className="font-semibold tracking-wider text-gray-600 relative"
                to="/carts"
              >
                <GiShoppingBag className="text-2xl hover:scale-110 duration-300 transition-all" />
                <span className="text-sm w-[18px] h-[18px] bg-cyan-700 text-white flex justify-center items-center rounded-full absolute -top-1 -right-1 font-bold animate-bounce">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>

          <Link
            className="inline-block bg-cyan-600 text-white py-1 px-4 rounded-full font-semibold uppercase text-sm whitespace-nowrap"
            to="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
