import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartslice";
import { FaAngleRight } from "react-icons/fa6";

export const productDetailsLoader = async ({ params }) => {
  const url = `https://www.course-api.com/react-store-products`;
  const response = await axios.get(url);
  const product = response.data.find((product) => product.id === params.id);
  if (!product) {
    throw new Error("Product not found!");
  }
  return product;
};
const ProductDetails = () => {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const addToCarts = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      <p className="flex items-center gap-2.5">
        <Link to="/">Home</Link>{" "}
        <FaAngleRight className="font-thin text-sm text-gray-500 mt-0.5" />
        <Link to="/products">Products</Link>
      </p>
      <article className="grid sm:grid-cols-[3fr_3fr] pt-6 gap-6">
        <img src={product.image} alt={product.name} />
        <div>
          <h2 className="font-semibold text-3xl mb-4 capitalize">
            {product.name}
          </h2>
          <p className="text-gray-400">{product.category}</p>
          <p className="mt-4 font-semibold text-gray-600">
            ${product.price / 100}
          </p>
          <p className="mt-6 leading-7 text-gray-500">{product.description}</p>
          <button
            onClick={() => dispatch(addToCarts)}
            className="py-1 px-3 rounded-full cursor-pointer bg-gray-700 text-white font-medium mt-9 hover:bg-gray-600"
          >
            Add to Cart
          </button>
        </div>
      </article>
    </>
  );
};
export default ProductDetails;
