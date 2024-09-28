"use client"; 

import { usePathname } from "next/navigation";
import Navbar from "../component/navbar/navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  
  if (pathname === "/login" || pathname === "/create-account" || pathname === "/dashboard") {
    return null; 
  }

  return <Navbar />;
}
