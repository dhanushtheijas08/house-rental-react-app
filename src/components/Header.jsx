import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex top-4 z-50 justify-between p-2 sticky rounded bg-primary text-white items-center">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
