import Link from "next/link";
import React from "react";

const ServiceCard = ({ link, image, button, title, details }: any) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 flex">
      <div className="bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <a href={link} className="block w-full flex-shrink-0">
          <img src={image} alt="service" className="w-full h-64 object-cover" />
        </a>
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="mb-4">
            <a
              href={link}
              className="block text-lg font-bold text-dark hover:text-primary dark:text-white sm:text-[22px] sm:leading-[35px]"
            >
              {title}
            </a>
          </h3>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6 flex-1">
            {details}
          </p>
          <a
            href={link}
            className="inline-flex items-center text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            {button}
            <span className="ml-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                  fill=""
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-[#090E34] pb-12 pt-20 dark:bg-dark lg:pb-[200px] lg:pt-[160px]">
      <div className="container mx-auto">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[70px]">
          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-5 max-w-[625px]">
              <span className="mb-2 block text-2xl font-semibold text-white">
                Our Services
              </span>
              <h2 className="text-4xl font-bold leading-[1.2] text-white sm:text-4xl md:text-[40px]">
                Are Geared To Help <br />
                Promote Your Business Growth.
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-row justify-center items-center gap-2">
            <ServiceCard
              link="/boston/web-design-and-development"
              image="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg"
              title="Web Design & Development"
              details="At Blooming Brands, we craft SEO-optimized, user-friendly websites with a customer-first approach to drive your business success."
              button="View Details"
            />
            <ServiceCard
              link="/boston/search-engine-optimization"
              image="https://img.freepik.com/free-photo/map-lying-wooden-table_53876-65112.jpg"
              title="Search Engine Optimization (SEO)"
              details="We optimize your website for search engines to boost visibility, attract targeted traffic, and increase revenue."
              button="View Details"
            />
            <ServiceCard
              link="/boston/online-marketing"
              image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Digital-Marketing.jpg"
              title="Online Marketing"
              details="Get data-driven, customized online marketing strategies that drive traffic, build brand loyalty, and increase sales."
              button="View Details"
            />
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-2">
            <ServiceCard
              link="/boston/content-creation-and-marketing"
              image="https://www.benchmarkemail.com/wp-content/uploads/2023/01/ContentCreation-scaled-e.jpg"
              title="Content Creation and Marketing"
              details="Our team will create engaging, high-quality content that builds brand authority, drives traffic, and boosts conversions."
              button="View Details"
            />
            <ServiceCard
              link="/boston/pay-per-click-advertisement"
              image="https://www.spinxdigital.com/app/uploads/2016/09/Identity-Based-PPC-Marketing-What-It-Is-and-Why-It-is-Important-1.jpg"
              title="Pay-Per-Click (PPC) Advertising"
              details="Experience our targeted PPC campaigns that drive traffic, increase conversions, and maximize your advertising ROI."
              button="View Details"
            />
            <ServiceCard
              link="/boston/social-media-management-service"
              image="https://tlc-texas.com/wp-content/uploads/2023/08/social-media-tips-blog-header-no-logo.png"
              title="Social Media Management"
              details="Let's manage and grow your social media presence, building engagement, driving traffic, and increasing brand visibility."
              button="View Details"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
