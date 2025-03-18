import { useLoaderData } from "react-router-dom";
export const productDetailsLoader = async ({ params }) => {
  const url = `https://www.course-api.com/react-store-products`;
  const response = await fetch(url);
  const products = await response.json();

  const product = products.find((product) => product.id === params.id);
  if (!product) {
    throw new Error("Product not found!");
  }
  return product;
};
const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  return (
    <article className="grid sm:grid-cols-[3fr_3fr] pt-6 gap-6">
      <img src={product.image} alt={product.name} />
      <div>
        <h2 className="font-semibold text-3xl mb-4 capitalize">
          {product.name}
        </h2>
        <p className="text-gray-400">{product.category}</p>
        <p className="mt-4 font-semibold text-gray-600">${product.price}</p>
        <p className="mt-6 leading-7 text-gray-500">{product.description}</p>
      </div>
    </article>
  );
};
export default ProductDetails;
