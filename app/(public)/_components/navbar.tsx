"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-gray-800 text-white p-2 flex justify-between items-center shadow-md">

      <div className=" flex justify-between items-center gap-x-3 w-[100%]">

        <Link href="/profile">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-gradient">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </Link>

        <Link href="/">
          <img className="w-[60px]" src={'/images/logo.png'} />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="bg-gradient">
                <FaUser className="text-white" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[40px]" align="end">
            <DropdownMenuItem>
              English
            </DropdownMenuItem>
            <DropdownMenuItem>
              Hindi
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
