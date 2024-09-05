"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const pages = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Latest News", href: "/latest-news", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const DesktopMenu: React.FC<{}> = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row gap-8 capitalize">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.href}
            className={
              pathname === page.href
                ? "text-sky-400"
                : "text-white hover:text-sky-400"
            }
          >
            {page.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default DesktopMenu;
