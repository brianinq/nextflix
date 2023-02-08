import Image from "next/image";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);
  return (
    <header className={`${scrolled ? "bg-[#e01010]" : ""}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          width={100}
          height={100}
          src="https://rb.gy/ulxxee"
          alt="Image"
          className="curser-pointer object-contain"
        />
        <ul className="hidden md:flex space-x-4 ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className=" flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden md:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href={"/account"}>
          <img
            src="https://rb.gy/g1pwyx"
            alt="Account"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
