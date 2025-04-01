import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../features/cart/cartslice";
import { FaAngleDown } from "react-icons/fa";
import { useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const Carts = () => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {});
  }, []);

  return (
    <section className="py-12">
      {cartItems.length >= 1 ? (
        <div className="grid lg:grid-cols-2 gap-20 sm:gap-28 items-start">
          <div className="flex flex-col gap-y-9">
            {cartItems.map((item) => {
              const { id, image, name, price } = item;
              return (
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    className="w-full sm:w-[250px] h-auto rounded-lg object-cover"
                    src={image}
                    alt={name}
                  />
                  <div className="">
                    <h2 className="mb-2 text-lg text-gray-500 capitalize font-semibold">
                      {name}
                    </h2>
                    <h5 className="text-2xl font-bold">${price / 100}</h5>
                    <button
                      onClick={() => dispatch(removeItem(id))}
                      className="rounded-full cursor-pointer py-1 px-4 font-medium bg-cyan-700 text-white mt-6"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-gray-100 rounded-2xl text-black p-12 text-center">
            <header className="text-center">
              <h2 className="font-semibold text-lg text-gray-500">
                Your purchases
              </h2>
            </header>
            <h4 className="text-center mt-9 font-medium text-3xl">
              Total: <span>${total / 100}</span>
            </h4>
            <div className="flex flex-col sm:flex-row mt-12 gap-3.5 justify-center">
              <button className="border-2 border-cyan-800 text-cyan-800 hover:bg-cyan-700 transition-all duration-300 cursor-pointer hover:text-white py-3 px-8 rounded font-semibold">
                Checkout
              </button>
              <Link
                to="/products"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer hover:text-white py-3 px-8 rounded font-semibold"
              >
                Shop more
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-4xl mb-12">Cart is empty</h2>
          <Link
            to="/products"
            className="py-1.5 px-4 rounded-full font-semibold bg-gray-200 text-black"
          >
            Shop now
          </Link>
        </div>
      )}
      <button className="absolute bottom-13 right-4 w-[25px] h-[25px] bg-gray-200 text-gray-600 rounded-full flex justify-center items-center text-lg">
        <FaAngleUp />
      </button>
      <button className="absolute bottom-4 right-4 w-[25px] h-[25px] bg-gray-200 text-gray-600 rounded-full flex justify-center items-center text-lg">
        <FaAngleDown />
      </button>
    </section>
  );
};
export default Carts;
