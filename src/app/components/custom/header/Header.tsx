import MobileMenu from "../../flowbite/drawer/MobileMenu";
import DesktopMenu from "../desktop-menu/DesktopMenu";

// app/components/Logo.tsx
import {
  Playfair_Display,
  Cedarville_Cursive,
  Days_One,
  Anton,
} from "@next/font/google"; // Import Playfair Display

// Initialize Playfair Display font
const playfair = Playfair_Display({
  weight: ["700"], // Use the desired weight
  subsets: ["latin"],
});

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

const daysOne = Days_One({
  subsets: ["latin"],
  weight: ["400"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const myLogoColors = [
  "#5AC8FA", // Vibrant Light Blue
];
const colorizeCompanyName = (name: string) => {
  return (
    <>
      {name.split("").map((char, index) => (
        <span
          key={index}
          style={{
            color: myLogoColors[index % myLogoColors.length],
            letterSpacing: "3px",
          }}
        >
          {char === " " ? "\u00A0" : char}{" "}
        </span>
      ))}
    </>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-[100vw] h-[64px] bg-[#090E34] text-white">
      <div className="w-[100vw] h-[64px] fixed top-0 z-50">
        <div className="container mx-auto h-[64px] flex flex-row justify-between items-center">
          <div className="w-[600px]">
            <p
              className={
                anton.className +
                " laywrite-cu-title text-2xl flex flex-row items-center justify-start py-2 lg:-ml-[40px] lg:text-4xl"
              }
            >
              {/* <span>
                <svg
                  height="90px"
                  width="90px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-71.68 -71.68 655.36 655.36"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      style={{ fill: "#D0F0EA" }}
                      d="M128,283.048c70.693,0,128,67.301,128,67.301s-57.307,67.301-128,67.301S0,350.349,0,350.349 S57.307,283.048,128,283.048z"
                    ></path>
                    <path
                      style={{ fill: "#92E0D3" }}
                      d="M213.079,212.251C263.067,262.237,256,350.349,256,350.349s-88.112,7.067-138.099-42.92 S74.98,169.331,74.98,169.331S163.092,162.264,213.079,212.251z"
                    ></path>
                    <path
                      style={{ fill: "#446662" }}
                      d="M384,283.048c-70.693,0-128,67.301-128,67.301s57.307,67.301,128,67.301s128-67.301,128-67.301 S454.693,283.048,384,283.048z"
                    ></path>
                    <path
                      style={{ fill: "#2B8578" }}
                      d="M298.92,212.251C248.933,262.237,256,350.349,256,350.349s88.112,7.067,138.099-42.92 s42.92-138.099,42.92-138.099S348.908,162.264,298.92,212.251z"
                    ></path>
                    <path
                      style={{ fill: "#6DB2A6" }}
                      d="M323.301,222.349c0,70.693-67.301,128-67.301,128s-67.301-57.307-67.301-128s67.301-128,67.301-128 S323.301,151.657,323.301,222.349z"
                    ></path>
                  </g>
                </svg>
              </span> */}
              {colorizeCompanyName("Blooming Brands")}
            </p>
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
