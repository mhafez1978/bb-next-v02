import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaAnglesRight } from "react-icons/fa6";
import { Anton } from "@next/font/google";
import Modal from "@/app/components/tailGrids/modal/Modal";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh]">
        <div className="container max-w-[90vw] h-[80vh] py-20 mx-auto flex flex-row ">
          <div className="w-1/2 h-full flex flex-col justify-center">
            <div className="w-full mx-auto flex flex-col justify-center h-full lg:pr-[100px]">
              <h1 className="mb-8 text-5xl text-dark-6 font-bold">
                Empowering Business Growth Through Smart Targeted Digital
                Solutions.
              </h1>

              <p className="mb-12 text-slate-900 text-base">
                We help your business grow with engaging custom made websites,
                business apps, tailored online marketing strategies, and
                targeted ads, all designed to attract your business new
                customers and boost your business presence in your targeted
                industry.
              </p>

              <div className="w-full flex flex-col justify-start items-center lg:flex-row lg:gap-6 sm:gap-y-8">
                <Modal />
                <Link
                  href="/services"
                  className="py-4 rounded-md text-center text-sky-600 font-medium"
                >
                  Discover Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex-col bg-[url('/team.png')] bg-contain bg-center bg-no-repeat">
            {/* <img
              src="/team.png"
              alt="anything"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
        <div className="w-full flex flex-row h-[20vh] mx-auto items-center justify-center">
          <div className="w-1/3 h-full flex flex-col justify-center items-start font-black bg-sky-700 text-white px-20 gap-3">
            <h2 className={anton.className + " text-4xl tracking-wider	"}>
              Blooming Brands
            </h2>
            <p className={anton.className + " text-xl tracking-wide	"}>
              Websites &amp; Online Marketing
            </p>
          </div>
          <div className="w-2/3 h-full flex flex-col items-start justify-center bg-sky-100 text-sky-900 px-24">
            <h2 className="text-lg text-black mb-4 w-[60%] capitalize font-semibold">
              Schedule a free consultation
              <br /> To learn how we can help get more customers for your
              business.
            </h2>
            <div className="flex flex-row gap-2 justify-center items-center">
              <span>
                <FaAnglesRight size={30} />
              </span>
              <Link href="/contact">Schedule A Free Call</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
