import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <div className="font-inter relative flex flex-col max-w-7xl mx-auto">
      <Header />
      <div className="p-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
