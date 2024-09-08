import BreadCrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const WebDesignAndDevelopmentPage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <BreadCrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Web Design &amp;
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Web Development
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we understand that your website is more than
              just an online presence—it&apos;s a powerful tool to attract new
              customers, showcase your brand, and drive business growth.
              That&apos;s why we approach every project with the same passion
              and dedication to success as if it were our own.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                Scoping & Gathering Client Requirements We begin every project
                by sitting down with you to fully understand your goals,
                audience, and vision. This phase is critical as it allows us to
                gather detailed requirements and scope out the project
                effectively. By aligning our work with your business needs from
                the start, we ensure the final product will exceed your
                expectations.
              </li>
              <li>
                Research & Strategy Before we begin designing or coding, we
                conduct thorough research on your industry, competitors, and
                audience. We identify trends and opportunities that will set
                your brand apart. Our strategy is crafted to enhance user
                experience, maximize engagement, and position your website for
                long-term success.
              </li>
              <li>
                Wireframing & Prototyping Once we have a clear strategy, we
                create wireframes to map out your site&apos;s structure and
                flow. This ensures a seamless user experience and intuitive
                navigation. From there, we move on to building prototypes,
                allowing you to see the framework in action and provide feedback
                early in the process.
              </li>
              <li>
                Development & Testing Our skilled developers take your approved
                design and bring it to life with clean, efficient code. Whether
                it&apos;s a simple landing page or a full-fledged e-commerce
                platform, we focus on creating websites that load quickly,
                function flawlessly, and are easy to maintain. We implement
                rigorous testing throughout the development process to ensure
                everything works perfectly across all devices and browsers.
              </li>
              <li>
                SEO Optimization & Content Integration Your website is only as
                good as its visibility. That&apos;s why we integrate search
                engine optimization (SEO) best practices from the start. From
                keyword research and meta tags to mobile responsiveness and page
                speed optimization, we make sure your website ranks high on
                search engines. This ensures that potential customers can find
                you easily and interact with your brand.
              </li>
              <li>
                Debugging & Final Launch Before launching, we meticulously debug
                the site to catch any potential issues. We test the performance
                under different conditions to guarantee reliability. Once
                we&apos;re confident everything is perfect, we launch your
                website with a bang! Our job doesn&apos;t stop there—we continue
                to monitor performance and provide ongoing support to keep your
                site running smoothly.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, your success is our success. We pride
              ourselves on the strong relationships we build with our clients,
              many of whom have become long-term partners. We take the time to
              understand your vision and turn it into a digital reality. Our
              client&apos;s satisfaction speaks for itself, and we are committed
              to helping you grow your brand through a website that is not only
              visually stunning but also strategically sound.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              We&apos;ve helped countless businesses grow their online presence,
              generate leads, and drive revenue through our innovative web
              design and development services. Our client testimonials and case
              studies speak volumes about our dedication and the results we
              deliver. We&apos;re not just creating websites—we&apos;re building
              your brand&apos;s future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignAndDevelopmentPage;
