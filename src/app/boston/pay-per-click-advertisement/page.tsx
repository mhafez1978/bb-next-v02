import Breadcrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const PPCServicePage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Pay-Per-Click (PPC) Advertising
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Drive Traffic, Increase Conversions
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we specialize in pay-per-click (PPC)
              advertising to help businesses reach their target audience,
              increase website traffic, and drive sales. With a carefully
              planned and executed PPC campaign, you can see immediate results,
              all while staying within your advertising budget. We design
              campaigns that maximize your return on investment (ROI) by
              targeting the right keywords and audience segments.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                <strong>Targeted Keyword Research:</strong>
                We conduct thorough keyword research to ensure your ads are
                placed in front of the right people. By focusing on high-intent
                search terms, we drive qualified traffic that is more likely to
                convert.
              </li>
              <li>
                <strong>Custom Campaign Strategy:</strong>
                Every business is different, which is why we develop a PPC
                strategy customized to your specific goals, audience, and
                industry. We work with you to determine the best platforms,
                whether it’s Google Ads, Bing Ads, or social media PPC.
              </li>
              <li>
                <strong>Ad Creation & Optimization:</strong>
                Our team creates compelling, high-converting ads that capture
                attention and encourage clicks. We continuously test and
                optimize your ads to improve performance and ensure your budget
                is used effectively.
              </li>
              <li>
                <strong>Landing Page Optimization:</strong>A great ad is only as
                effective as the landing page it leads to. We optimize your
                landing pages to ensure a seamless user experience, which
                increases your conversion rates.
              </li>
              <li>
                <strong>Performance Tracking & Reporting:</strong>
                We provide transparent reporting on how your PPC campaigns are
                performing. By tracking key metrics such as click-through rate
                (CTR), cost-per-click (CPC), and conversion rates, we
                continually adjust and improve your campaign.
              </li>
              <li>
                <strong>Remarketing Campaigns:</strong>
                Don’t lose potential customers after their first visit. We set
                up remarketing campaigns to re-engage visitors who showed
                interest in your products or services but didn’t convert.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, we focus on maximizing your PPC investment. We
              work hand-in-hand with you to ensure that your ads reach the right
              audience at the right time, delivering results that matter to your
              business. Whether you're aiming to increase sales, generate leads,
              or build brand awareness, we tailor our services to meet your
              goals.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              Our PPC strategies have helped businesses across industries
              increase their visibility and achieve measurable results. With a
              data-driven approach, we consistently deliver high-quality traffic
              and better conversions. Let Blooming Brands handle your PPC
              campaigns so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PPCServicePage;
