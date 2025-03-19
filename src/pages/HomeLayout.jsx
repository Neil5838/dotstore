import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LuLoaderCircle } from "react-icons/lu";
import { useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar />
      <main className="max-w-6xl w-[90vw] mx-auto my-8">
        {isPageLoading ? (
          <div className="text-2xl max-w-[25px] mx-auto">
            <LuLoaderCircle className="animate-spin" />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};
export default HomeLayout;
