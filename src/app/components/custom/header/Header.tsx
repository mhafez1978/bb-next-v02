import MobileMenu from "../../flowbite/drawer/MobileMenu";
import DesktopMenu from "../desktop-menu/DesktopMenu";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-[100vw] h-[64px] bg-[#090E34] text-white">
      <div className="w-[100vw] h-[64px] fixed top-0 z-50">
        <div className="container mx-auto h-[64px] flex flex-row justify-between items-center">
          <div className="w-[380px] font-extrabold">
            <p className="text-xl lg:text-2xl">Blooming Brands</p>
          </div>
          <div className="hidden lg:block">
            <DesktopMenu />
          </div>
          <div className="w-[200px] block lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
