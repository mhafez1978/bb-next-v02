import React from "react";
import Brands from "../logo-bar/Brands";

export default function Cta() {
  return (
    <section className="relative z-10 overflow-hidden bg-white text-black py-20 lg:py-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-[790px] text-center">
          <h2 className="mx-auto mb-6 w-full max-w-[550px] text-3xl font-bold !leading-tight -tracking-[.72px] text-black sm:text-4xl dark:text-white">
            Have a Project Idea In Mind? Let’s Work Together.
          </h2>
          <p className="mb-8 text-base text-black sm:text-lg dark:text-dark-6">
            Our experts are ready to help you with your next project.
          </p>
          <button className="inline-flex items-center justify-center rounded-lg outline px-10 py-4 text-base font-medium text-black duration-200 hover:bg-purple-300">
            Let&apos;s Talk
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <Brands />
      </div>
    </section>
  );
}
