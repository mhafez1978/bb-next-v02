import React from "react";
import Marketing from "../components/tailGrids/marketing/Marketing";
import Breadcrumbs from "../components/custom/breadcrumbs/BreadCrumbs";

const AboutPage: React.FC<{}> = () => {
  return (
    <section className="flex w-[100vw] min-h-[100vh] pt-[160px] pb-[200px]">
      <div className="container mx-auto">
        <Breadcrumbs />
        <Marketing />
      </div>
    </section>
  );
};

export default AboutPage;
