import { FaPlus } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { logoutUser } from "@/service/apiAuth";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authReducer";

const Dashboard = () => {
  let { pathname } = useLocation();
  pathname = pathname.split("/").at(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserLogout = async () => {
    const isLogedOut = await logoutUser();
    if (isLogedOut) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <main className="max-w-7xl mx-auto">
      <div className="fixed top-0 left-0 right-0 border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur z-20">
        <nav className="h-14 flex items-center justify-between px-4">
          <div className="block">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </Link>
          </div>

          <Button size="icon" onClick={handleUserLogout}>
            <IoLogInOutline className="w-5 h-5" />
          </Button>
        </nav>
      </div>
      <div className="px-5 space-y-5">
        <div className="mt-20 flex justify-between flex-col sm:flex-row gap-2">
          <SectionHeading className="text-2xl sm:text-3xl  sm:text-left">
            Admin Dashboard
          </SectionHeading>
          {pathname === "dashboard" && (
            <Link to="/admin/dashboard/new-house">
              <Button className="flex items-center">
                <FaPlus className="-mb-0.5 w-4 h-4" />
                <span className="ml-2">Add New House</span>
              </Button>
            </Link>
          )}
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
