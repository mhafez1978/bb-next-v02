import Breadcrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const SEOServicePage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Search Engine Optimization
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Drive Traffic, Generate Leads, Increase Revenue
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we know that getting found online is crucial
              to your business’s success. Our SEO services are designed to boost
              your website’s visibility, attract the right customers, and
              increase your revenue. We approach every SEO project with a deep
              understanding of search engine algorithms and a passion for
              delivering real results.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                <strong>Scoping & Gathering Client Requirements:</strong>
                We begin by learning about your business goals and your target
                audience. Understanding your needs helps us tailor an SEO
                strategy that aligns with your long-term vision.
              </li>
              <li>
                <strong>Comprehensive SEO Audit & Research:</strong>
                Before we dive in, we conduct an in-depth SEO audit of your
                website and research your competitors and industry trends. We
                identify keyword opportunities, technical issues, and ranking
                gaps that are critical to your success.
              </li>
              <li>
                <strong>On-Page SEO:</strong>
                Our team optimizes your website's structure, content, and
                metadata to ensure your pages are indexed correctly and rank
                highly. We focus on keyword research, title tags, meta
                descriptions, image optimization, and mobile responsiveness.
              </li>
              <li>
                <strong>Off-Page SEO & Link Building:</strong>
                To further improve your rankings, we implement a targeted
                link-building strategy. We secure high-quality backlinks from
                authoritative sites, enhancing your domain authority and driving
                traffic from trusted sources.
              </li>
              <li>
                <strong>Local SEO:</strong>
                For businesses serving a specific geographic area, we implement
                local SEO strategies that boost your visibility on Google Maps,
                Yelp, and other directories. We ensure that your business is at
                the forefront when local customers search for services you
                offer.
              </li>
              <li>
                <strong>Performance Monitoring & Reporting:</strong>
                We track and analyze your site's performance using tools like
                Google Analytics, Search Console, and SEMrush. Our detailed
                reports keep you informed on how your SEO efforts are
                translating into traffic, leads, and revenue.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, your success is our success. We’re dedicated
              to driving meaningful traffic to your website and turning visitors
              into loyal customers. With a results-driven approach, our team
              ensures that your business achieves lasting success in the
              competitive online marketplace.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              We’ve helped businesses across a wide range of industries boost
              their online presence and climb the search rankings. Our SEO
              services consistently deliver measurable results, and we take
              pride in helping our clients achieve their goals. Whether you’re a
              local business or a global brand, Blooming Brands is here to help
              you succeed online.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOServicePage;
