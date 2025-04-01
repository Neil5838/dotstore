import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HomeLayout,
  Products,
  ProductDetails,
  Landing,
  Error,
  SinglePageError,
  Signup,
  Login,
  Carts,
} from "./pages";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { loader as productsLoader } from "./pages/Products";
import { productDetailsLoader } from "./pages/ProductDetails";
import { signupAction } from "./pages/Signup";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartslice";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: productDetailsLoader,
      },
      {
        path: "carts",
        element: <Carts />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    action: signupAction,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
