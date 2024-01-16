import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between bg-light-blue px-8 py-4 dark:bg-light-gray dark:text-white">
      <div className="flex gap-3">
        <Sheet>
          <SheetTrigger>
            <Image
              alt="Menu Hamberguer"
              src="/menu.svg"
              width={24}
              height={24}
              className="hover:scale-105"
            />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Ola!</SheetTitle>
              <SheetDescription>Under construction</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Image
          className="hidden sm:block"
          alt="Logo"
          src="/logo.svg"
          width={126}
          height={20}
        />
      </div>
      <div className="flex items-center justify-center gap-4 text-light-white">
        <ModeToggle />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-light-gray  font-semibold dark:bg-gray-500">
          F
        </div>

        <div className="hidden  sm:block">Fabio C Pinto</div>
        <Image
          className="hidden sm:block"
          alt="Arrow Down"
          src="/arrow-down.svg"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Navbar;
