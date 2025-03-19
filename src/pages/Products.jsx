import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const url = "https://www.course-api.com/react-store-products";

export const productsLoader = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
const Products = () => {
  const products = useLoaderData();
  return (
    <>
      <div className="pt-4 pb-12">
        <h2 className="text-3xl">What are you looking for?</h2>
      </div>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] gap-6">
        {products.map((product) => {
          const { id, image, name, price, category } = product;
          return (
            <Link key={id} to={`/products/${id}`}>
              <article key={product.id} className="shadow cursor-pointer">
                <img
                  className="w-full h-[250px] object-cover"
                  src={image}
                  alt={name}
                />
                <div className="py-2">
                  <h2 className="capitalize text-xl font-semibold">{name}</h2>
                  <p className="text-gray-400 my-1">{category}</p>
                  <p className="text-gray-500 font-semibold">${price}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};
export default Products;
