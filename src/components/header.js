// import { Link } from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar,
} from "@nextui-org/react";

import Link from "next/link";
import HeaderAuth from "./headerAuth";
import SearchInput from "./searchInput";
import { Suspense } from "react";

export default function Header() {
  return (
    <Navbar
      className="bg-header mb-6 py-2 min-w-full"
      isBlurred="false"
      isBordered="false"
    >
      <NavbarBrand>
        <Link href="/" className="font-bold">
          BuzzBoard
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense > 
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <HeaderAuth />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
