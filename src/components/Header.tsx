"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setPageScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 transition-all bg-white bg-opacity-80 backdrop-blur-lg z-10 w-full mx-auto flex flex-col justify-center items-center",
        pageScrolled && "shadow-sm",
        pageScrolled ? "pt-0" : "pt-2",
      )}
    >
      <div className="max-w-7xl w-full mx-auto py-2 px-4 sm:px-10 flex flex-row justify-between items-center">
        <div className="w-auto flex flex-row justify-start items-center">
          <Link href="/">
            <div className="cursor-pointer flex flex-row justify-start items-center hover:opacity-80">
              <span className="sr-only">假装上班</span>
              <img src="/logo-main.png" className="h-12 sm:h-14 w-auto mr-2" alt="假装上班" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
