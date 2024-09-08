import Breadcrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const ContentCreationAndMarketingPage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Content Creation & Marketing
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Build Your Brand with Engaging Content
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we believe that quality content is the
              foundation of successful online marketing. Content creation is
              more than just words on a page—it’s about telling your brand’s
              story, educating your audience, and driving meaningful engagement.
              Our content creation and marketing services help you connect with
              your customers and establish your brand as an authority in your
              industry.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                <strong>Content Strategy:</strong>
                We work closely with you to develop a content strategy that
                aligns with your business goals. By identifying your target
                audience, understanding their needs, and analyzing market
                trends, we create content that resonates and converts.
              </li>
              <li>
                <strong>Blog Posts & Articles:</strong>
                Well-researched, SEO-optimized blog posts and articles are key
                to driving traffic and building credibility. We produce
                informative, engaging content designed to rank well on search
                engines and attract your target audience.
              </li>
              <li>
                <strong>Video Production:</strong>
                From concept to creation, we deliver compelling video content
                that tells your brand’s story, explains your services, and
                engages your audience across platforms.
              </li>
              <li>
                <strong>Infographics & Visual Content:</strong>
                We create eye-catching infographics, visuals, and illustrations
                that simplify complex information and make your content more
                shareable.
              </li>
              <li>
                <strong>Social Media Content:</strong>
                We create custom content for social media platforms that
                increase engagement, boost brand awareness, and help you build a
                loyal community.
              </li>
              <li>
                <strong>Email Marketing Content:</strong>
                Personalized, relevant email campaigns help nurture leads and
                re-engage customers. We create email content that drives
                conversions.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, your success is our priority. Our content
              creation and marketing services are built to drive traffic,
              generate leads, and boost your brand’s authority. We pride
              ourselves on crafting high-quality content that speaks to your
              audience, establishing long-lasting relationships with customers
              and driving your business growth.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              Our content marketing strategies have helped businesses across
              industries increase their online presence and convert visitors
              into customers. Whether through blog posts, videos, or social
              media, we deliver content that gets results. Let us help you
              create and market content that builds trust, boosts engagement,
              and grows your brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentCreationAndMarketingPage;
