import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="">
      <div className="max-w-3xl pt-7 sm:pt-9">
        <h2 className="text-4xl sm:text-6xl mb-4">
          Transform Your Space with Elegant & Comfortable Furniture
        </h2>
        <p className="text-gray-500 leading-7 mb-8">
          Explore a curated collection of premium furniture designed for style,
          comfort, and durability. Whether you're refreshing a single room or
          furnishing your entire home, find the perfect pieces to match your
          aesthetic.
        </p>
        <Link
          to="/products"
          className="bg-cyan-300 text-black py-1.5 px-4 rounded-full font-semibold uppercase text-sm"
        >
          Shop now
        </Link>
      </div>
    </section>
  );
};
export default Landing;
