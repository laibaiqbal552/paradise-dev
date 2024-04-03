"use client";

import Link from "next/link";
import Container from "./Container";
import { Button } from "./Button";
import Logo from "./Logo";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { cn } from "@/lib/utils";
import OutsideClickDetector from "@/hooks/OutsideClickDetector";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const containerRef = OutsideClickDetector(() => {
    setIsMenuOpen(false);
  }, isMenuOpen === true);

  return (
    <nav
      ref={containerRef}
      className="bg-white dark:bg-body-light relative z-[10000]"
    >
      <Container asChild>
        <div className="flex items-center bg-white dark:bg-body-light justify-between lg:space-x-5 py-4 sm:py-1">
          <Link href="/" className="relative sm:top-1.5">
            <Logo src={""} alt={"logo"} className="max-md:w-[192px]" />
          </Link>

          <ul
            className={cn(
              "flex lg:items-center max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:-z-50 max-lg:flex-col transition-all duration-500 max-lg:-translate-y-full bg-white dark:bg-body-light",
              isMenuOpen ? "max-lg:translate-y-0" : null
            )}
          >
            <li>
              <Button
                padding="5"
                variant="ghost"
                className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center"
              >
                <a href="#">Home</a>
              </Button>
            </li>
            <li>
              <Button
                padding="5"
                variant="ghost"
                className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center"
              >
                <a href="#">Service</a>
              </Button>
            </li>
            <li>
              <Button
                padding="5"
                variant="ghost"
                className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center"
              >
                <a href="#">About Us</a>
              </Button>
            </li>
            <li>
              <Button
                padding="5"
                variant="ghost"
                className="hover:bg-primary/20 max-lg:w-full text-left hover:text-primary hover:py-4 max-sm:text-center"
              >
                <a href="#">Portfolio</a>
              </Button>
            </li>
            <li className="max-lg:w-fit max-lg:mx-auto">
              <Button className="uppercase">Begin</Button>
            </li>
          </ul>

          <button
            onClick={() => setIsMenuOpen((val) => !val)}
            className="max-lg:flex hidden text-2xl mr-4"
          >
            <MdOutlineMenu />
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
