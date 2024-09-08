import Breadcrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const OnlineMarketingServicePage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Online Marketing
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Grow Your Business with Strategic Marketing
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we understand that online marketing is the key
              to reaching your target audience, building brand awareness, and
              driving sales. Our approach to online marketing focuses on
              developing a customized strategy that works specifically for your
              business, delivering measurable results that fuel growth.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                <strong>Initial Consultation & Strategy:</strong>
                We start by learning about your business goals and challenges.
                Based on this, we create a marketing strategy tailored to your
                needs, focusing on platforms that will deliver the highest ROI.
              </li>
              <li>
                <strong>Search Engine Marketing (SEM):</strong>
                Our SEM strategies include highly targeted pay-per-click (PPC)
                ads on Google and Bing. By optimizing your campaigns with the
                right keywords, ad copy, and landing pages, we drive traffic and
                increase conversions.
              </li>
              <li>
                <strong>Social Media Marketing:</strong>
                We create compelling campaigns across platforms like Facebook,
                Instagram, LinkedIn, and Twitter. From content creation to paid
                social ads, we engage your audience and build brand loyalty.
              </li>
              <li>
                <strong>Email Marketing:</strong>
                We help you build and maintain your customer base with
                personalized, data-driven email campaigns. Whether it’s lead
                nurturing or re-engaging past customers, our email strategies
                convert.
              </li>
              <li>
                <strong>Content Marketing:</strong>
                Quality content is at the heart of successful online marketing.
                We produce blog posts, infographics, videos, and more to attract
                visitors and establish your business as an industry leader.
              </li>
              <li>
                <strong>Conversion Rate Optimization (CRO):</strong>
                We constantly analyze the data and optimize your campaigns for
                better performance. From A/B testing to refining your calls to
                action, we ensure every aspect of your marketing strategy is
                geared toward maximum conversion.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, we measure our success by the success of our
              clients. Our online marketing strategies are tailored to deliver
              the results you need to grow your business. We continuously
              monitor performance and adapt our strategies, ensuring your
              campaigns stay competitive and effective.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              From small businesses to established enterprises, we’ve helped
              clients across various industries grow their online presence and
              revenue. Our clients trust us to handle their online marketing,
              and we consistently deliver results that speak for themselves. Let
              us help you grow your brand and reach new heights through
              data-driven, strategic online marketing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineMarketingServicePage;
