"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-black flex justify-between items-center p-4 top-0 left-0 right-0 fixed w-100 shadow-sm">

      <div className=" flex justify-between items-center gap-x-3 w-[100%]">
        <Link href="/profile">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-gradient">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </Link>
        {/* <Button
          variant={pathname === "/server" ? "default" : "outline"}
          asChild
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          variant={pathname === "/client" ? "default" : "outline"}
          asChild
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button variant={pathname === "/admin" ? "default" : "outline"} asChild>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          variant={pathname === "/settings" ? "default" : "outline"}
          asChild
        >
          <Link href="/settings">Settings</Link>
        </Button> */}
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
