import React from "react";

const Services = () => {
  return (
    <section className="bg-[#090E34] min-h-[100vh] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[70px]">
          <div className="w-full px-4 lg:w-8/12">
            <div className="mb-5 max-w-[625px]">
              <h2 className="text-2xl mb-8 font-bold text-white sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-white ">
                We help your business get new customers through data driven apps
                and online marketing strategies.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center">
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-01.jpg"
            title="Logo Design"
            details="Professional logo design builds brand identity, attracts customers, and boosts business credibility and recognition."
            button="View Details"
          />
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-02.jpg"
            title="Website Design"
            details="Effective web design improves user experience, enhances brand presence, and drives business growth."
            button="View Details"
          />
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-03.jpg"
            title="WordPress Development"
            details="Custom WordPress sites provide tailored design and functionality, and SEO friendly option for startups and small business."
            button="View Details"
          />
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-01.jpg"
            title="Online Stores"
            details="Online stores increase sales, reach global customers, provide 24/7 shopping, and enhance business growth opportunities."
            button="View Details"
          />
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-02.jpg"
            title="Social Media Management"
            details="Social media management boosts brand visibility, engages audiences, drives traffic, and enhances business credibility."
            button="View Details"
          />
          <ServiceCard
            link="/#"
            image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-03.jpg"
            title="Online Marketing"
            details="Online marketing increases website traffic, improves SEO rankings, and enhances brand awareness effectively."
            button="View Details"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({
  link,
  image,
  button,
  title,
  details,
}: {
  link: string;
  image: string;
  button: string;
  title: string;
  details: string;
}) => {
  return (
    <div className="w-full h-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 bg-white dark:bg-dark-2">
        <a href={link} className="block w-full">
          <img src={image} alt="image" className="w-full" />
        </a>
        <div className="p-8 sm:p-11 md:p-8 lg:px-6 xl:p-10 2xl:p-11">
          <h3>
            <a
              href={link}
              className="mb-4 block text-lg font-bold text-dark hover:text-primary dark:text-white sm:text-[22px] sm:leading-[35px]"
            >
              {title}
            </a>
          </h3>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
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
