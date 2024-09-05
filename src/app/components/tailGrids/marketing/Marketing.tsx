import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Marketing: React.FC<{}> = () => {
  return (
    <>
      <section id="about" className="relative py-20 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 pt-16 max-w-[600px] lg:mb-0">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-dark dark:text-white sm:text-[40px]/[48px]">
                  We Help You <br />
                  Get Better Results
                </h2>
                <p className="mb-8 text-base leading-relaxed dark:text-dark-6 text-body-color">
                  Blooming Brands team of experts will handle everything from
                  building websites and developing web lead funnels to managing
                  your online ads and social media content. Making it easier for
                  you to focus on running your business.
                </p>
                <h3 className="max-w-[550px] mb-8 text-xl font-bold text-dark dark:text-white">
                  Flexible, Scalable
                  <br /> Subscription-Based Marketing Plans{" "}
                </h3>
                <ul className="pb-6 list-none max-w-[600px]">
                  <li className="flex flex-row justify-center items-center gap-4 mb-4 text-base text-body-color dark:text-dark-6">
                    <span>
                      <IoMdCheckmark size={45} />
                    </span>
                    <span>
                      Predictable monthly payments that fit within your budget,
                      avoiding large upfront costs
                    </span>
                  </li>

                  <li className="flex flex-row justify-center items-center gap-4 mb-4 text-base text-body-color dark:text-dark-6">
                    <span>
                      <IoMdCheckmark size={45} />
                    </span>
                    <span>
                      We manage your website, marketing campaigns, and social
                      media engagement on a consistent schedule, so you can
                      focus on running your business.
                    </span>
                  </li>
                  <li className="flex flex-row justify-center items-center gap-4 mb-4 text-base text-body-color dark:text-dark-6">
                    <span>
                      <IoMdCheckmark size={45} />
                    </span>
                    <span>
                      Detailed campaigns performance and analytics reports to
                      help you track engagement and better optimize campaigns
                      for better results over time.
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-04/image-01.jpg"
                      alt="about image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-04/image-02.jpg"
                      alt="about image"
                      className="object-cover object-center w-full h-full"
                    />

                    {/* <img
                      src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-20851.jpg"
                      alt="about image"
                      className="object-cover object-center w-full h-full"
                    /> */}
                  </div>
                  <div className="relative bg-sky-300/80 z-10 mb-4 flex items-center justify-center overflow-hidden py-12 px-6 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="absolute -mt-[1vh] left-40 block text-4xl font-extrabold text-black">
                        09
                      </span>
                      <span className="block text-base font-semibold text-black">
                        We have
                      </span>
                      <span className="block text-base font-medium text-black text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      <span className="absolute top-0 left-0 -z-10">
                        <svg
                          width="106"
                          height="144"
                          viewBox="0 0 106 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="-67"
                            y="47.127"
                            width="113.378"
                            height="131.304"
                            transform="rotate(-42.8643 -67 47.127)"
                            fill="url(#paint0_linear_1416_214)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_214"
                              x1="-10.3111"
                              y1="47.127"
                              x2="-10.3111"
                              y2="178.431"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute top-0 right-0 -z-10">
                        <svg
                          width="130"
                          height="97"
                          viewBox="0 0 130 97"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="0.86792"
                            y="-6.67725"
                            width="155.563"
                            height="140.614"
                            transform="rotate(-42.8643 0.86792 -6.67725)"
                            fill="url(#paint0_linear_1416_215)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_215"
                              x1="78.6495"
                              y1="-6.67725"
                              x2="78.6495"
                              y2="133.937"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <svg
                          width="175"
                          height="104"
                          viewBox="0 0 175 104"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.1"
                            x="175.011"
                            y="108.611"
                            width="101.246"
                            height="148.179"
                            transform="rotate(137.136 175.011 108.611)"
                            fill="url(#paint0_linear_1416_216)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1416_216"
                              x1="225.634"
                              y1="108.611"
                              x2="225.634"
                              y2="256.79"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" />
                              <stop
                                offset="1"
                                stop-color="white"
                                stop-opacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing;
