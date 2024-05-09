import Logo from "./Logo";
import { MobileSidebar } from "./MobileNavbar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo isDark />
        <div className="block sm:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden sm:block">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
