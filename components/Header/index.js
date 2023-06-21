import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { userService } from "../../services";

export default function Header({ Children }) {
  const brands = [
    { src: "/logo-brand/adidas.svg", height: 80, width: 80 },
    { src: "/logo-brand/reebok.svg", height: 80, width: 80 },
    { src: "/logo-brand/nike.svg", height: 80, width: 80 },
    { src: "/logo-brand/converse.svg", height: 80, width: 80 },
    { src: "/logo-brand/asics.svg", height: 80, width: 80 },
    { src: "/logo-brand/puma.svg", height: 80, width: 80 },
    { src: "/logo-brand/fila.svg", height: 80, width: 80 },
    { src: "/logo-brand/vans.svg", height: 80, width: 80 },
    { src: "/logo-brand/jordan.svg", height: 80, width: 80 },
    { src: "/logo-brand/Vector.svg", height: 80, width: 80 },
    { src: "/logo-brand/crocs.svg", height: 80, width: 80 },
    { src: "/logo-brand/under-armour.svg", height: 80, width: 80 },
  ];

  const [open, setOpen] = useState("");
  function hamClick() {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-menu");
    hamburger.classList.toggle("hamburger-active");
    nav.classList.toggle("hidden");
  }

  const [scroll, setScroll] = React.useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  });
  return (
    <>
      <header
        className={`bg-gradient-to-r from-[#FF626D] to-[#FCAD72] shadow-lg absolute top-0 left-0 w-full h-24 flex items-center z-30 ${
          scroll ? "navbar-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="flex px-4 md:max-lg:hidden">
              <Link href={"/#"} className="block py-6">
                <Image
                  src={"/Logo.svg"}
                  alt="logo website"
                  width={140}
                  height={50}
                />
              </Link>
            </div>
            <div
              className="flex items-center justify-center px-4"
              onClick={hamClick}
            >
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden md:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden justify-center absolute py-5 max-w-[250px] w-full right-0 top-full lg:static lg:bg-transparent lg:max-w-full md:block md:static md:max-w-full md:bg-transparent xs:bg-white xs:rounded-md hp:bg-white hp:rounded-md"
                onClick={hamClick}
              >
                <ul className="block font-semibold lg:flex lg:shadow-none lg:rounded-none md:flex md:shadow-none md:rounded-none">
                  <li className="group text-base text-white py-2 mx-8">
                    <a href="/">Home</a>
                  </li>
                  <li className="group text-base text-white py-2 mx-8">
                    <a href="/catalog">Catalog</a>
                  </li>
                  <li
                    onMouseLeave={() => setOpen(false)}
                    className="group text-base text-white py-2 mx-8"
                  >
                    <button onMouseOver={() => setOpen(true)}>
                      <span>Brands</span>
                    </button>
                    <ul
                      className={`absolute grid grid-flow-row grid-cols-4 gap-14 px-10 -ml-64 bg-primary h-auto py-5 ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      {brands.map((brand) => (
                        <li>
                          <Image
                            key={brand}
                            className="flex w-full items-center"
                            {...brand}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="group text-base text-white py-2 mx-8">
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <ul className="flex gap-5">
                <li>
                  <Link href={"/chart"}>
                    <Image src={"cart.svg"} width={44} height={44} />
                  </Link>
                </li>
                <li>
                  <Link href={"/profile"}>
                    <Image src={"profile.svg"} width={44} height={44} />
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  <Image
                    src={"/logout.svg"}
                    width={44}
                    height={44}
                    onClick={userService.logout}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
