import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LOGO from "../assets/images/company-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Our Work", href: "/work", current: false },
  { name: "Clients", href: "/client", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div className="">
      <div className="">
        <Disclosure as="nav" className="bg-[#FFFDD0] py-2">
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center rounded-full overflow-hidden lg:mr-3">
                  <Link to="/">
                    <img
                      alt="Your Company"
                      src={LOGO}
                      className="h-16 md:h-12 w-auto cursor-pointer hover:scale-125 transition ease-out duration-300"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-2 lg:space-x-4">
                    {navigation.map((item) => {
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          aria-current={item.current ? "page" : undefined}
                          className={classNames(
                            item.current
                              ? "bg-[#FFBF00] text-black"
                              : "text-black hover:bg-[#FFBF00]",
                            "rounded-md px-3 py-2 text-md font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="flex gap-x-2">
                <FaFacebook className="text-2xl lg:text-3xl cursor-pointer text-[#405DE6] hover:scale-110 transition ease-out duration-300" />
                <FaSquareInstagram className="text-2xl lg:text-3xl cursor-pointer text-[#E1306C] hover:scale-110 transition ease-out duration-300" />
                <FaTwitter className="text-2xl lg:text-3xl cursor-pointer text-[#1DA1F2] hover:scale-110 transition ease-out duration-300" />
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-[#FFBF00] text-black"
                      : "text-black hover:bg-[#FFBF00]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Navbar;
