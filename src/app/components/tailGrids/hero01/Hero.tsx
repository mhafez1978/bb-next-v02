import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaAnglesRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col w-[100vw] h-[100vh]">
        <div className="container max-w-[90vw] h-[80vh] py-20 mx-auto flex flex-row ">
          <div className="w-1/2 h-full flex flex-col justify-center">
            <div className="w-[80%] mx-auto flex flex-col justify-center h-full">
              <h1 className="mb-8 text-6xl text-dark-6 font-bold">
                We Help Small Business Bloom
              </h1>

              <p className="mb-12 text-slate-900 text-base">
                Blooming Brands is your trusted partner for building Data Driven
                Apps, WordPress websites, Online Stores, and Online Marketing
                Plans geared to help your business grow.
              </p>

              <div className="w-full flex justify-start items-center lg:flex-row lg:gap-6 sm:flex-col sm:gap-y-8">
                <button className="w-[240px] bg-sky-700 text-white outline px-12 py-4 rounded-md hover:bg-emerald-500 hover:text-white">
                  Get Started Today
                </button>
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
          <div className="w-1/3 h-full flex flex-col justify-center items-center text-3xl font-black bg-sky-700 text-white">
            <h2>Blooming Brands</h2>
          </div>
          <div className="w-2/3 h-full flex flex-col items-start justify-center bg-sky-100 text-sky-900 px-24">
            <h2 className="text-lg font-light text-black mb-4 w-[80%]">
              Schedule a free consultation to learn how we can help get more
              customers for your business.
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
