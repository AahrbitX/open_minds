import React from "react";
import Link from "next/link";

import {
  IconBrandX,
  IconBrandBluesky,
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm">
      <div className="pb-16 pt-4 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <Image
                    src="/aahrbitx-black.png"
                    alt="Aahrbitx Logo"
                    width={32}
                    height={32}
                  />
                  <i>Open</i>Minds
                </Link>
              </div>
              <p className="text-gray-500 sm:pr-8">
                AI solutions for streamlined operations, enhanced decisions, and
                scalable growth. We unlock your full potential with intelligent
                automation and data-driven insights
              </p>
            </div>

            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Products
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Overview
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Solutions
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Pricing
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Company
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="https://aahrbitx.in"
                    target="_blank"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    AahrbitX&deg;
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Blogs
                  </Link>
                </div>
                <div>
                  <Link
                    href="/sitemap.xml"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Sitemap
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Contact
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Chat
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    FAQ
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
                Legal
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Terms of Service
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>
                </div>

                <div>
                  <Link
                    href="#"
                    className="text-gray-500 transition duration-100 hover:text-primary active:text-indigo-600"
                  >
                    Cookie settings
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100/60 backdrop-blur-sm">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 py-8">
            <span className="text-sm text-gray-400">
              {" "}
              &copy; 2025 - Present AahrbitX&deg;. All rights reserved.{" "}
            </span>

            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primary active:text-primary"
              >
                <IconBrandBluesky />
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primary active:text-primary"
              >
                <IconBrandX />
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primary active:text-primary"
              >
                <IconBrandLinkedinFilled />
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-primary active:text-primary"
              >
                <IconBrandGithubFilled />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
