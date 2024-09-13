"use client";

import { useEffect, useState } from "react";
import { admin } from "@/lib/actions/admin.action";
import { LogoutButton } from "@/components/auth/logout-button";
import { IoExitOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"; // Importing an icon from react-icons
import { FaTachometerAlt, FaUser } from "react-icons/fa";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null); // Set default as null to indicate loading state
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Move this hook above JSX return

  const handleServerActionClick = async () => {
    try {
      const response = await admin();
      if (response.status === 200) {
        setHasAccess(true); // Allow access
      } else if (response.status === 403) {
        setError("You do not have access to this page.");
        setHasAccess(false); // Block access
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      setHasAccess(false); // Block access on error
    }
  };

  useEffect(() => {
    handleServerActionClick();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Ensure hooks are always rendered before returning JSX conditionally
  if (error) {
    return (
      <nav className="flex justify-between items-center p-4 top-0 left-0 right-0 fixed w-100 shadow-sm">
        {error}
        <LogoutButton>
          <IoExitOutline className="h-4 w-4 mr-4" />
          Logout
        </LogoutButton>
      </nav>
    );
  }

  if (hasAccess === null) {
    return <div>Loading...</div>; // Keep this before returning the full component
  }

  if (!hasAccess) {
    return <div>You do not have access to this page.</div>; // Prevent rendering when access is denied
  }

  return (
    // <div className="bg-gradient h-full w-full flex flex-col gap-y-10 items-center justify-center">
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"
          } bg-gray-800 text-white h-screen p-5 pt-8 transition-width duration-300`}
      >
        <div className="flex justify-between items-center">
          <span className={`${!isSidebarOpen && "hidden"} text-lg font-bold`}>
            Dashboard
          </span>
          <button className="text-2xl" onClick={toggleSidebar}>
            <FiMenu />
          </button>
        </div>

        <div className="mt-10">
          <ul>
            <li className="flex items-center p-2 my-4 hover:bg-gray-700 rounded-md">
              <FaTachometerAlt className={`${isSidebarOpen && "mr-4"}`} />
              {isSidebarOpen && <Link href="/admin/dashboard">Dashboard</Link>}
            </li>
            <li className="flex items-center p-2 my-4 hover:bg-gray-700 rounded-md">
              <FaUser className={`${isSidebarOpen && "mr-4"}`} />
              {isSidebarOpen && <Link href="/admin/profile">Profile</Link>}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow h-screen bg-gray-100">
        {/* Navbar */}
        <div className="w-full bg-white shadow-md p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        <div className="p-8">{children}</div>
      </div>
    </div>
    // </div>
  );
};

export default AdminLayout;
