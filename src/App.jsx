import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productsLoader } from "./pages/Products";
import { productDetailsLoader } from "./pages/ProductDetails";
import { signupAction } from "./pages/Signup";
import {
  HomeLayout,
  Products,
  ProductDetails,
  Landing,
  Error,
  SinglePageError,
  Signup,
  Login,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: productDetailsLoader,
        errorElement: <SinglePageError />,
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
  return <RouterProvider router={router} />;
};
export default App;
