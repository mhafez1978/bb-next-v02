import Breadcrumbs from "@/app/components/custom/breadcrumbs/BreadCrumbs";
import React from "react";

const SocialMediaManagementPage = () => {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh] flex flex-col pt-[160px] pb-[200px]">
        <div className="mb-4 container mx-auto">
          <Breadcrumbs />
        </div>
        <div className="container mx-auto flex flex-col">
          <h2 className="mb-2 text-3xl font-black lg:text-6xl ">
            Social Media Management
          </h2>
          <h5 className="mb-8 text-2xl font-black lg:text-5xl ">
            Grow Your Presence, Engage Your Audience
          </h5>
          <div className="w-[54%] overflow-hidden">
            <p className="text-base mb-8">
              At Blooming Brands, we help businesses build, manage, and grow
              their social media presence. Social media is one of the most
              powerful tools for engaging with customers, increasing brand
              awareness, and driving business growth. We develop and execute
              strategies tailored to your brand and audience, ensuring that your
              social media channels consistently perform at their best.
            </p>
            <ul className="list-disc pl-4 mb-8 text-base flex flex-col justify-evenly gap-4">
              <li>
                <strong>Custom Social Media Strategy:</strong>
                We start by understanding your business goals and target
                audience. Our team creates a custom strategy designed to build
                your brand, increase engagement, and drive traffic across key
                platforms like Facebook, Instagram, LinkedIn, and Twitter.
              </li>
              <li>
                <strong>Content Creation & Scheduling:</strong>
                We design eye-catching, engaging content for your social media
                channels, including graphics, videos, and posts. By scheduling
                content at the right times, we ensure maximum visibility and
                interaction.
              </li>
              <li>
                <strong>Community Management:</strong>
                Social media is about more than just posting content—it’s about
                building relationships. We actively monitor and manage your
                profiles, responding to comments, messages, and engaging with
                your audience to build a strong online community.
              </li>
              <li>
                <strong>Paid Social Media Advertising:</strong>
                To reach a wider audience, we create and manage targeted social
                media ads that are designed to convert. Whether you're looking
                for more followers, increased traffic, or higher sales, we run
                campaigns that deliver results.
              </li>
              <li>
                <strong>Performance Analytics & Reporting:</strong>
                We track the performance of your social media campaigns using
                advanced analytics. Our transparent reporting helps you
                understand what’s working, what’s not, and where to focus next
                for the best return on investment.
              </li>
              <li>
                <strong>Influencer Collaborations:</strong>
                We help you identify and collaborate with influencers in your
                niche to amplify your brand's reach and build credibility.
                Leveraging trusted voices can lead to greater engagement and
                loyalty.
              </li>
            </ul>
            <h4 className="mb-2">
              <span className="font-black">Dedicated to Your Success</span>
            </h4>
            <p className="mb-8 text-base">
              At Blooming Brands, we’re passionate about helping businesses
              succeed through strategic social media management. Whether you're
              looking to increase brand awareness, build a loyal community, or
              drive more sales, we have the expertise to make it happen.
            </p>
            <h4 className="mb-2">
              <span className="font-black">Happy Clients, Proven Results</span>
            </h4>
            <p className="text-base mb-8">
              Our social media management services have helped businesses across
              industries grow their online presence, engage with their
              audiences, and achieve measurable results. Let us handle your
              social media so you can focus on running your business while
              watching your online presence thrive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaManagementPage;
