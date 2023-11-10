"use client";
import React from "react";
import Image from "next/image";
import ThemeSelector from "./ThemeSelector";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-3 shadow-md dark:bg-slate-500  ">
      <div className="flex p-3 ">
        <Image
          src="/logo.svg"
          width={25}
          height={25}
          alt="logo"
          className="dark:invert"
        />
        <p className="font-bold dark:invert text-center max-sm:hidden">
          AI for investors
        </p>
      </div>
      <div className="flex justify-end items-center gap-4 mr-4 ">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button variant="default">Sign-In</Button>
          </Link>
        </SignedOut>
        <ThemeSelector />

        <Mobilenav />
      </div>
    </div>
  );
};

export default Navbar;
