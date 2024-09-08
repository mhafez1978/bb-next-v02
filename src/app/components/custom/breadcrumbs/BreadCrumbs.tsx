"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const pathArray = pathname.split("/").filter((path) => path);

  return (
    <nav aria-label="breadcrumbs">
      <ul className="flex items-center text-gray-600">
        {/* Home link */}
        <li className="flex items-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {/* Breadcrumbs for other pages */}
        {pathArray.length > 0 && (
          <>
            {pathArray.map((path, index) => {
              const href = "/" + pathArray.slice(0, index + 1).join("/");
              const isLast = index === pathArray.length - 1;

              return (
                <li key={href} className="flex items-center">
                  <span className="mx-2">/</span>
                  {!isLast ? (
                    <>
                      {path === "boston" ? (
                        // Show 'boston' as non-clickable text
                        <span className="capitalize text-gray-500">
                          {path.replace(/-/g, " ")}
                        </span>
                      ) : (
                        <Link
                          href={href}
                          className="text-blue-600 hover:underline capitalize"
                        >
                          {path.replace(/-/g, " ")}
                        </Link>
                      )}
                    </>
                  ) : (
                    <span className="capitalize text-gray-500">
                      {path.replace(/-/g, " ")}
                    </span>
                  )}
                </li>
              );
            })}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
