import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import toast from "react-hot-toast";

export const signupAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  toast.success("Data submitted!");
  return redirect("/");
};

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const closeForm = () => {
    setIsOpen(false);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <section className="min-h-screen flex justify-center items-center sm:p-0 p-6">
      {isOpen && (
        <div className="grid sm:grid-cols-[1fr_1fr] shadow-xl relative">
          <button
            onClick={() => {
              closeForm(), navigateHome();
            }}
            className="absolute top-3 sm:-top-8 cursor-pointer right-3 sm:right-0 text-xl"
          >
            <FaXmark />
          </button>
          <div className="border border-gray-300 border-r-0">
            <header className="p-4">
              <img
                className="w-[120px] h-auto -ml-4"
                src="https://www.names.co.uk/blog/wp-content/uploads/2018/05/dotSTORE.png"
                alt="logo"
              />
            </header>
            <div className="max-w-[400px] mx-auto py-6 px-6">
              <p className="text-sm">Live life easy</p>
              <h2 className="text-xl font-semibold mb-6">Sign up to .Store</h2>
              <Form className="space-y-4" method="POST">
                <div>
                  <input
                    className="border border-gray-300 w-full py-2 px-4"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-full py-2 px-4"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <input
                    className="border border-gray-300 w-full py-2 px-4"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="bg-cyan-600 text-white py-1 px-4 rounded font-semibold uppercase text-sm cursor-pointer"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </Form>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400">
                Have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <img
            className="w-[465px] h-auto"
            src="https://media.homeboxstores.com/i/homebox/163118822-163118822-HMBX09012021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$"
            alt=""
          />
        </div>
      )}
    </section>
  );
};
export default Signup;
