"use client";

import { FaUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { FaChartBar } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsBagCheckFill } from "react-icons/bs";


const FooterNav = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-black flex justify-between items-center p-0 bottom-0 left-0 right-0 fixed w-100 shadow-sm h-[50px] overflow-hidden">
      <div className=" flex justify-between items-center w-[100%] ">
        <Button
          variant={pathname === "/" ? "default" : "outline"}
          asChild
          className="bg-transparent text-primary-foreground border-0 rounded-none w-[100%] text-[12px] pt-2 pb-1 h-[50px]"
        >
          <Link href="/" className="flex gap-1 flex-col"><IoMdHome className="w-[20px] h-[20px]" />Home</Link>
        </Button>
        <Button
          variant={pathname === "/market" ? "default" : "outline"}
          asChild
          className="bg-transparent text-primary-foreground border-0 rounded-none w-[100%] text-[12px] pt-2 pb-1 h-[50px]"
        >
          <Link href="/market" className="flex gap-1 flex-col"><FaChartBar className="w-[20px] h-[20px]" />Market</Link>
        </Button>
        <Button
          variant={pathname === "/team" ? "default" : "outline"}
          asChild
          className="bg-transparent text-primary-foreground border-0 rounded-none w-[100%] text-[12px] pt-2 pb-1 h-[50px]"
        >
          <Link href="/team" className="flex gap-1 flex-col"><ImUsers className="w-[20px] h-[20px]" />Team</Link>
        </Button>
        <Button
          variant={pathname === "/assets" ? "default" : "outline"}
          asChild
          className="bg-transparent text-primary-foreground border-0 rounded-none w-[100%] text-[12px] pt-2 pb-1 h-[50px]"
        >
          <Link href="/assets" className="flex gap-1 flex-col"><BsBagCheckFill className="w-[20px] h-[20px]" />Assets</Link>
        </Button>
        <Button
          variant={pathname === "/settings" ? "default" : "outline"}
          asChild
          className="bg-transparent text-primary-foreground border-0 rounded-none w-[100%] text-[12px] pt-2 pb-1 h-[50px]"
        >
          <Link href="/settings" className="flex gap-1 flex-col"><FaUser className="w-[20px] h-[20px]" />Profile</Link>
        </Button>
      </div>
    </nav>
  );
};

export default FooterNav;
